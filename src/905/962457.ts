import { Rectangle } from '../905/249071'
import { Vector2D } from '../905/512402'
import { filterNumberValues } from '../905/807535'
import { packRgb } from '../figma_app/273493'
import { Axis, HideMode, InteractionCpp, LayoutDirection } from '../figma_app/763686'

enum TableUIElement {
  NONE = 0,
  REORDER = 1,
  ADD = 2,
  APPEND = 3,
  RESIZE = 4,
}

enum HandleState {
  INACTIVE = 0,
  HOVERED = 1,
  SELECTED = 2,
  DRAGGED = 3,
}

export function renderExpandedReorderHandle(canvas: any, bounds: Rectangle, backgroundColor: number, foregroundColor: number, axis: Axis) {
  for (let offset of (canvas.fillRoundedRect(bounds.expand(TableUIRenderer.borderStrokeWidth), TableUIRenderer.reorderHandleHoveredCornerRadius + 2, packRgb(1, 1, 1)), canvas.fillRoundedRect(bounds, TableUIRenderer.reorderHandleHoveredCornerRadius, backgroundColor), TableUIRenderer.equalIconOffsets)) {
    let iconRect = new Rectangle(offset, TableUIRenderer.equalIconSize)
    iconRect = axis === Axis.X ? iconRect : iconRect.transpose()
    canvas.fillRoundedRect(iconRect.offsetBy(bounds.topLeft()), TableUIRenderer.equalIconCornerRadius, foregroundColor)
  }
}
export function renderInactiveReorderHandle(canvas: any, bounds: Rectangle, color: number) {
  canvas.fillRoundedRect(bounds.expand(TableUIRenderer.borderStrokeWidth), TableUIRenderer.reorderHandleInactiveCornerRadius + 1, packRgb(1, 1, 1))
  canvas.fillRoundedRect(bounds, TableUIRenderer.reorderHandleInactiveCornerRadius, color)
}
let TableUIRenderer = class TableUIRendererClass {
  _bounds: Rectangle
  _widths: number[]
  _heights: number[]
  _canvasScale: number
  _shouldRender: HideMode
  _columnPositions: number[]
  _rowPositions: number[]
  _inactiveColor: number
  _hoverColorPrimary: number
  _hoverColorSecondary: number
  _selectedColor: number
  _whiteColor: number
  public numColumns: number
  public numRows: number
  _tableUiHorizontalAxis: number
  _tableUiVerticalAxis: number
  _addColumnButtonPositions: Vector2D[]
  _addRowButtonPositions: Vector2D[]
  _addColumnButtonHitTestBounds: Rectangle[]
  _addRowButtonHitTestBounds: Rectangle[]
  _hoveredReorderColumnHandleBounds: Rectangle[]
  _hoveredReorderRowHandleBounds: Rectangle[]
  _inactiveReorderColumnHandleBounds: Rectangle[]
  _inactiveReorderRowHandleBounds: Rectangle[]
  _reorderColumnHandleHitTestBounds: Rectangle[]
  _reorderRowHandleHitTestBounds: Rectangle[]
  _appendColumnBounds: Rectangle
  _appendRowBounds: Rectangle
  _columnDividerHitTestBounds: Rectangle[]
  _rowDividerHitTestBounds: Rectangle[]
  _columnDividerRenderBounds: Rectangle[]
  _rowDividerRenderBounds: Rectangle[]

  constructor(bounds: Rectangle, widths: number[], heights: number[], canvasScale: number, shouldRender: HideMode) {
    this._bounds = bounds
    this._widths = widths
    this._heights = heights
    this._canvasScale = canvasScale
    this._shouldRender = shouldRender
    let strokeWeight = TableUIRendererClass.cellStrokeWeight * canvasScale
    this._columnPositions = widths.reduce((acc, width, index) => (acc.push(width + acc[index]), acc), [0]).map((pos, index) => index === 0 ? pos : pos - strokeWeight)
    this._rowPositions = heights.reduce((acc, height, index) => (acc.push(height + acc[index]), acc), [0]).map((pos, index) => index === 0 ? pos : pos - strokeWeight)
    this._inactiveColor = InteractionCpp.getTableNodeColorInactive()
    this._hoverColorPrimary = InteractionCpp.getTableNodeColorHoveredPrimary()
    this._hoverColorSecondary = InteractionCpp.getTableNodeColorHoveredSecondary()
    this._selectedColor = InteractionCpp.getTableNodeColorSelected()
    this._whiteColor = packRgb(1, 1, 1)
    this.numColumns = widths.length
    this.numRows = heights.length
    this._tableUiHorizontalAxis = this._bounds.origin.y - TableUIRendererClass.padding - TableUIRendererClass.reorderHandleInactiveSize.y / 2
    this._tableUiVerticalAxis = this._bounds.origin.x - TableUIRendererClass.padding - TableUIRendererClass.reorderHandleInactiveSize.y / 2
    this._addColumnButtonPositions = this._getAddColumnButtonPositions()
    this._addRowButtonPositions = this._getAddRowButtonPositions()
    this._addColumnButtonHitTestBounds = this._getAddColumnButtonHitTestBounds()
    this._addRowButtonHitTestBounds = this._getAddRowButtonHitTestBounds()
    this._hoveredReorderColumnHandleBounds = this._computeReorderColumnHandleBounds(true)
    this._hoveredReorderRowHandleBounds = this._computeReorderRowHandleBounds(true)
    this._inactiveReorderColumnHandleBounds = this._computeReorderColumnHandleBounds(false)
    this._inactiveReorderRowHandleBounds = this._computeReorderRowHandleBounds(false)
    this._reorderColumnHandleHitTestBounds = this._computeReorderColumnHandleHitTestBounds()
    this._reorderRowHandleHitTestBounds = this._computeReorderRowHandleHitTestBounds()
    this._appendColumnBounds = this._getAppendColumnBounds()
    this._appendRowBounds = this._getAppendRowBounds()
    this._columnDividerHitTestBounds = this._getColumnDividerBounds(true)
    this._rowDividerHitTestBounds = this._getRowDividerBounds(true)
    this._columnDividerRenderBounds = this._getColumnDividerBounds(false)
    this._rowDividerRenderBounds = this._getRowDividerBounds(false)
  }

  isDirty(bounds: Rectangle, widths: number[], heights: number[], canvasScale: number, shouldRender: HideMode): boolean {
    if (!bounds.equals(this._bounds) || canvasScale !== this._canvasScale || shouldRender !== this._shouldRender || widths.length !== this._widths.length || heights.length !== this._heights.length)
      return true
    for (let i = 0; i < widths.length; i++) {
      if (widths[i] !== this._widths[i])
        return true
    }
    for (let i = 0; i < heights.length; i++) {
      if (heights[i] !== this._heights[i])
        return true
    }
    return false
  }

  _getBackgroundColor(state: HandleState): number {
    switch (state) {
      case HandleState.INACTIVE:
      case HandleState.HOVERED:
        return this._hoverColorSecondary
      case HandleState.DRAGGED:
      case HandleState.SELECTED:
        return this._selectedColor
      default:
        return packRgb(1, 0, 0)
    }
  }

  _getForegroundColor(state: HandleState): number {
    switch (state) {
      case HandleState.INACTIVE:
      case HandleState.HOVERED:
        return this._hoverColorPrimary
      case HandleState.DRAGGED:
      case HandleState.SELECTED:
        return this._whiteColor
      default:
        return packRgb(1, 0, 0)
    }
  }

  _getAppendColumnBounds(): Rectangle {
    let buttonLength = TableUIRendererClass.appendButtonLength
    let origin = new Vector2D(this._bounds.right() + TableUIRendererClass.appendButtonPadding, this._bounds.top())
    return new Rectangle(origin, new Vector2D(buttonLength, this._bounds.height()))
  }

  _getAppendRowBounds(): Rectangle {
    let buttonLength = TableUIRendererClass.appendButtonLength
    let origin = new Vector2D(this._bounds.left(), this._bounds.bottom() + TableUIRendererClass.appendButtonPadding)
    return new Rectangle(origin, new Vector2D(this._bounds.width(), buttonLength))
  }

  _getAddColumnButtonPositions(): Vector2D[] {
    let positions: Vector2D[] = []
    for (let i = 0; i <= this.numColumns; i++) {
      let x = this._bounds.origin.x + this._columnPositions[i]
      let y = this._tableUiHorizontalAxis
      positions.push(new Vector2D(x, y))
    }
    return positions
  }

  _getAddRowButtonPositions(): Vector2D[] {
    let positions: Vector2D[] = []
    for (let i = 0; i <= this.numRows; i++) {
      let x = this._tableUiVerticalAxis
      let y = this._bounds.origin.y + this._rowPositions[i]
      positions.push(new Vector2D(x, y))
    }
    return positions
  }

  _getAddColumnButtonHitTestBounds(): Rectangle[] {
    let bounds: Rectangle[] = []
    for (let i = 0; i < this.numColumns; i++) {
      let offset = new Vector2D(this._columnPositions[i], -TableUIRendererClass.hitTestPaddingThreshold.y)
      let center = this._bounds.origin.plus(offset)
      let rect = Rectangle.fromCenterSize(center, TableUIRendererClass.hitTestPaddingThreshold.multiplyBy(2))
      bounds.push(rect)
    }
    return bounds
  }

  _getAddRowButtonHitTestBounds(): Rectangle[] {
    let bounds: Rectangle[] = []
    for (let i = 0; i < this.numRows; i++) {
      let offset = new Vector2D(-TableUIRendererClass.hitTestPaddingThreshold.y, this._rowPositions[i])
      let center = this._bounds.origin.plus(offset)
      let rect = Rectangle.fromCenterSize(center, TableUIRendererClass.hitTestPaddingThreshold.multiplyBy(2).transpose())
      bounds.push(rect)
    }
    return bounds
  }

  _getRowPositions(): number[] {
    return this._rowPositions
  }

  _getColumnPositions(): number[] {
    return this._columnPositions
  }

  _computeReorderColumnHandleHitTestBounds(): Rectangle[] {
    let bounds: Rectangle[] = []
    for (let i = 0; i < this.numColumns; i++) {
      let offset = new Vector2D((this._columnPositions[i] + this._columnPositions[i + 1]) / 2, -TableUIRendererClass.hitTestPaddingThreshold.y)
      let center = this._bounds.origin.plus(offset)
      let size = new Vector2D(this._columnPositions[i + 1] - this._columnPositions[i], 2 * TableUIRendererClass.hitTestPaddingThreshold.y)
      bounds.push(Rectangle.fromCenterSize(center, size))
    }
    return bounds
  }

  _computeReorderRowHandleHitTestBounds(): Rectangle[] {
    let bounds: Rectangle[] = []
    for (let i = 0; i < this.numRows; i++) {
      let offset = new Vector2D(-TableUIRendererClass.hitTestPaddingThreshold.y, (this._rowPositions[i] + this._rowPositions[i + 1]) / 2)
      let center = this._bounds.origin.plus(offset)
      let size = new Vector2D(2 * TableUIRendererClass.hitTestPaddingThreshold.y, this._rowPositions[i + 1] - this._rowPositions[i])
      bounds.push(Rectangle.fromCenterSize(center, size))
    }
    return bounds
  }

  _computeReorderColumnHandleBounds(isHovered: boolean): Rectangle[] {
    let bounds: Rectangle[] = []
    let handleSize = isHovered ? TableUIRendererClass.reorderHandleHoveredSize : TableUIRendererClass.reorderHandleInactiveSize
    let halfSize = handleSize.divideBy(2)
    let positions = this._columnPositions
    for (let i = 0; i < this.numColumns; i++) {
      let x = this._bounds.origin.x + (positions[i] + positions[i + 1]) / 2
      let y = this._tableUiHorizontalAxis
      let origin = new Vector2D(x, y).minus(halfSize)
      let rect = new Rectangle(origin, handleSize)
      bounds.push(rect)
    }
    return bounds
  }

  _computeReorderRowHandleBounds(isHovered: boolean): Rectangle[] {
    let bounds: Rectangle[] = []
    let handleSize = (isHovered ? TableUIRendererClass.reorderHandleHoveredSize : TableUIRendererClass.reorderHandleInactiveSize).transpose()
    let halfSize = handleSize.divideBy(2)
    let positions = this._rowPositions
    for (let i = 0; i < this.numRows; i++) {
      let x = this._tableUiVerticalAxis
      let y = this._bounds.origin.y + (positions[i] + positions[i + 1]) / 2
      let origin = new Vector2D(x, y).minus(halfSize)
      let rect = new Rectangle(origin, handleSize)
      bounds.push(rect)
    }
    return bounds
  }

  _getColumnDividerBounds(includeHitTestPadding: boolean): Rectangle[] {
    let bounds: Rectangle[] = []
    let dividerWidth = TableUIRendererClass.dividerHeight + (includeHitTestPadding ? TableUIRendererClass.dividerHitTestPadding : 0)
    for (let i = 0; i < this._addColumnButtonPositions.length; i++) {
      let x = this._addColumnButtonPositions[i].x - dividerWidth / 2
      let y = this._bounds.top()
      let origin = new Vector2D(x, y)
      let size = new Vector2D(dividerWidth, this._bounds.height())
      bounds.push(new Rectangle(origin, size))
    }
    return bounds
  }

  _getRowDividerBounds(includeHitTestPadding: boolean): Rectangle[] {
    let bounds: Rectangle[] = []
    let dividerHeight = TableUIRendererClass.dividerHeight + (includeHitTestPadding ? TableUIRendererClass.dividerHitTestPadding : 0)
    for (let i = 0; i < this._addRowButtonPositions.length; i++) {
      let x = this._bounds.left()
      let y = this._addRowButtonPositions[i].y - dividerHeight / 2
      let origin = new Vector2D(x, y)
      let size = new Vector2D(this._bounds.width(), dividerHeight)
      bounds.push(new Rectangle(origin, size))
    }
    return bounds
  }

  _isOutsideTableUIBounds(point: Vector2D): boolean {
    return !this._bounds.expand(2 * TableUIRendererClass.hitTestPaddingThreshold.y).containsPointIncludingBoundary(point)
  }

  getHoveredSpan(point: Vector2D): Vector2D {
    if (this._isOutsideTableUIBounds(point))
      return new Vector2D(-1, -1)
    let columnIndex = this.numColumns
    for (let i = 1; i < this._addColumnButtonPositions.length; i++) {
      if (point.x <= this._addColumnButtonPositions[i].x) {
        columnIndex = i
        break
      }
    }
    let rowIndex = this.numRows
    for (let i = 1; i < this._addRowButtonPositions.length; i++) {
      if (point.y <= this._addRowButtonPositions[i].y) {
        rowIndex = i
        break
      }
    }
    return new Vector2D(columnIndex - 1, rowIndex - 1)
  }

  getHoveredRegion(point: Vector2D): { element: TableUIElement, tableAxis?: LayoutDirection, elementIndex?: number } {
    if (this._bounds.isEmpty() || !this.shouldRender() || this._isOutsideTableUIBounds(point)) {
      return {
        element: TableUIElement.NONE,
      }
    }
    if (this.shouldRenderAddButton()) {
      let columnButtonBounds = this._addColumnButtonHitTestBounds
      for (let i = 1; i < columnButtonBounds.length; i++) {
        if (columnButtonBounds[i].containsPointIncludingBoundary(point)) {
          return {
            element: TableUIElement.ADD,
            tableAxis: LayoutDirection.COLUMN,
            elementIndex: i,
          }
        }
      }
      let rowButtonBounds = this._addRowButtonHitTestBounds
      for (let i = 1; i < rowButtonBounds.length; i++) {
        if (rowButtonBounds[i].containsPointIncludingBoundary(point)) {
          return {
            element: TableUIElement.ADD,
            tableAxis: LayoutDirection.ROW,
            elementIndex: i,
          }
        }
      }
    }
    for (let i = 0; i < this.numColumns; i++) {
      let bounds = this.getReorderHandleHitTestBounds(LayoutDirection.COLUMN, i)
      if (bounds && bounds.containsPointIncludingBoundary(point)) {
        return {
          element: TableUIElement.REORDER,
          tableAxis: LayoutDirection.COLUMN,
          elementIndex: i,
        }
      }
    }
    for (let i = 0; i < this.numRows; i++) {
      let bounds = this.getReorderHandleHitTestBounds(LayoutDirection.ROW, i)
      if (bounds && bounds.containsPointIncludingBoundary(point)) {
        return {
          element: TableUIElement.REORDER,
          tableAxis: LayoutDirection.ROW,
          elementIndex: i,
        }
      }
    }
    if (this._appendColumnBounds.containsPointIncludingBoundary(point)) {
      return {
        element: TableUIElement.APPEND,
        tableAxis: LayoutDirection.COLUMN,
      }
    }
    if (this._appendRowBounds.containsPointIncludingBoundary(point)) {
      return {
        element: TableUIElement.APPEND,
        tableAxis: LayoutDirection.ROW,
      }
    }
    for (let i = 0; i < this._columnDividerHitTestBounds.length; i++) {
      if (this._columnDividerHitTestBounds[i].containsPointIncludingBoundary(point)) {
        return {
          element: TableUIElement.RESIZE,
          tableAxis: LayoutDirection.COLUMN,
          elementIndex: i,
        }
      }
    }
    for (let i = 0; i < this._rowDividerHitTestBounds.length; i++) {
      if (this._rowDividerHitTestBounds[i].containsPointIncludingBoundary(point)) {
        return {
          element: TableUIElement.RESIZE,
          tableAxis: LayoutDirection.ROW,
          elementIndex: i,
        }
      }
    }
    return {
      element: TableUIElement.NONE,
    }
  }

  getNearestSpan(direction: LayoutDirection, coordinate: number): number {
    let positions = direction === LayoutDirection.ROW ? this._addRowButtonPositions : this._addColumnButtonPositions
    let axis = direction === LayoutDirection.ROW ? Axis.Y : Axis.X
    for (let i = 0; i < positions.length - 1; i++) {
      if (coordinate <= (positions[i].component(axis) + positions[i + 1].component(axis)) / 2)
        return i
    }
    return positions.length - 1
  }

  getNearestColumn(x: number): number {
    return this.getNearestSpan(LayoutDirection.COLUMN, x)
  }

  getNearestRow(y: number): number {
    return this.getNearestSpan(LayoutDirection.ROW, y)
  }

  displaceRectForSpan(direction: LayoutDirection, index: number, rect: Rectangle): void {
    let spanId = InteractionCpp.getTableSpanIdAtIndex(direction, index)
    let displacement = InteractionCpp.getViewportTableSpanDisplacement(spanId)
    rect.origin = rect.origin.plus(Vector2D.fromFigVector(displacement))
  }

  getSpanThickness(index: number, direction: LayoutDirection): number {
    return direction === LayoutDirection.COLUMN ? this._widths[index] / this._canvasScale : this._heights[index] / this._canvasScale
  }

  getReorderHandleHitTestBounds(direction: LayoutDirection, index: number): Rectangle | null {
    let bounds = direction === LayoutDirection.ROW ? this._reorderRowHandleHitTestBounds : this._reorderColumnHandleHitTestBounds
    if (index < 0 || index >= bounds.length)
      return null
    let rect = bounds[index].clone()
    this.displaceRectForSpan(direction, index, rect)
    return rect
  }

  getReorderHandleBounds(direction: LayoutDirection, index: number, state: HandleState): Rectangle | null {
    let inactiveBounds = direction === LayoutDirection.COLUMN ? this._inactiveReorderColumnHandleBounds : this._inactiveReorderRowHandleBounds
    let hoveredBounds = direction === LayoutDirection.COLUMN ? this._hoveredReorderColumnHandleBounds : this._hoveredReorderRowHandleBounds
    let targetBounds = state === HandleState.INACTIVE ? inactiveBounds : hoveredBounds
    if (index < 0 || index >= targetBounds.length)
      return null
    let rect = targetBounds[index].clone()
    this.displaceRectForSpan(direction, index, rect)
    return rect
  }

  renderInactiveReorderHandle(canvas: any, direction: LayoutDirection, index: number): void {
    let bounds = this.getReorderHandleBounds(direction, index, HandleState.INACTIVE)
    bounds !== null && renderInactiveReorderHandle(canvas, bounds, this._inactiveColor)
  }

  renderInactiveAddButton(canvas: any, direction: LayoutDirection, index: number): void {
    if (!this.shouldRenderAddButton())
      return
    let positions = direction === LayoutDirection.COLUMN ? this._addColumnButtonPositions : this._addRowButtonPositions
    if (index < 1 || index >= positions.length - 1)
      return
    let position = positions[index]
    canvas.fillCircle(position, TableUIRendererClass.addButtonInactiveRadius + TableUIRendererClass.borderStrokeWidth, this._whiteColor)
    canvas.fillCircle(position, TableUIRendererClass.addButtonInactiveRadius, this._inactiveColor)
  }

  renderHitTestBoundsForDebugging(canvas: any): void {
    for (let i = 0; i < Math.max(this.numRows, this.numColumns); ++i) {
      for (let direction of [LayoutDirection.ROW, LayoutDirection.COLUMN]) {
        if (i < (direction === LayoutDirection.ROW ? this.numRows : this.numColumns)) {
          let bounds = this.getReorderHandleHitTestBounds(direction, i)
          bounds && canvas.fillRoundedRect(bounds, 0, packRgb(0, 1, 0))
        }
      }
    }
    if (this.shouldRenderAddButton()) {
      for (let bounds of this._addColumnButtonHitTestBounds.slice(1)) canvas.fillRoundedRect(bounds, 0, packRgb(1, 0, 0))
      for (let bounds of this._addRowButtonHitTestBounds.slice(1)) canvas.fillRoundedRect(bounds, 0, packRgb(1, 0, 0))
    }
  }

  renderExpandedReorderHandle(canvas: any, direction: LayoutDirection, index: number, state: HandleState): void {
    let bounds = this.getReorderHandleBounds(direction, index, state)
    if (bounds !== null)
      renderExpandedReorderHandle(canvas, bounds, this._getBackgroundColor(state), this._getForegroundColor(state), direction === LayoutDirection.COLUMN ? Axis.X : Axis.Y)
  }

  _renderPlusButton(canvas: any, center: Vector2D, color: number): void {
    let strokeWidth = TableUIRendererClass.plusIconStrokeWidth
    let iconLength = TableUIRendererClass.plusIconLength
    let horizontalRect = new Rectangle(new Vector2D(center.x - iconLength / 2, center.y - strokeWidth / 2), new Vector2D(iconLength, strokeWidth))
    let verticalRect = new Rectangle(new Vector2D(center.x - strokeWidth / 2, center.y - iconLength / 2), new Vector2D(strokeWidth, iconLength))
    canvas.fillRect(horizontalRect, color)
    canvas.fillRect(verticalRect, color)
  }

  renderExpandedAddButton(canvas: any, position: Vector2D, state: HandleState): void {
    canvas.fillCircle(position, TableUIRendererClass.addButtonHoveredRadius + TableUIRendererClass.borderStrokeWidth, this._whiteColor)
    canvas.fillCircle(position, TableUIRendererClass.addButtonHoveredRadius, this._getBackgroundColor(state))
    this._renderPlusButton(canvas, position, this._getForegroundColor(state))
  }

  renderAppendButton(canvas: any, direction: LayoutDirection, state: HandleState): void {
    let bounds = direction === LayoutDirection.COLUMN ? this._appendColumnBounds : this._appendRowBounds
    let backgroundColor = state === HandleState.INACTIVE ? this._hoverColorSecondary : this._selectedColor
    let foregroundColor = state === HandleState.INACTIVE ? this._hoverColorPrimary : this._whiteColor
    canvas.fillRoundedRect(bounds, TableUIRendererClass.appendButtonCornerRadius, backgroundColor)
    this._renderPlusButton(canvas, bounds.center(), foregroundColor)
  }

  renderDivider(canvas: any, direction: LayoutDirection, index: number, state: HandleState): void {
    let bounds = direction === LayoutDirection.COLUMN ? this._columnDividerRenderBounds : this._rowDividerRenderBounds
    if (index < 0 || index >= bounds.length)
      return
    let dividerBounds = bounds[index]
    let color = this._getBackgroundColor(state)
    canvas.fillRoundedRect(dividerBounds, TableUIRendererClass.dividerCornerRadius, color)
  }

  renderAddButton(canvas: any, direction: LayoutDirection, index: number, state: HandleState): void {
    if (!this.shouldRenderAddButton())
      return
    let positions = direction === LayoutDirection.COLUMN ? this._addColumnButtonPositions : this._addRowButtonPositions
    if (index < 0 || index > positions.length)
      return
    let position = positions[index]
    this.renderExpandedAddButton(canvas, position, state)
  }

  renderHoveredInactiveElements(canvas: any, span: Vector2D): void {
    for (let direction of filterNumberValues(LayoutDirection)) {
      let index = span.component(direction ? Axis.X : Axis.Y)
      this.renderInactiveReorderHandle(canvas, direction, index)
      this.renderInactiveAddButton(canvas, direction, index)
      this.renderInactiveAddButton(canvas, direction, index + 1)
    }
  }

  renderAllInactiveElements(canvas: any): void {
    for (let direction of filterNumberValues(LayoutDirection)) {
      let count = direction === LayoutDirection.COLUMN ? this.numColumns : this.numRows
      for (let i = 0; i < count; i++) this.renderInactiveReorderHandle(canvas, direction, i)
      for (let i = 1; i < count; i++) this.renderInactiveAddButton(canvas, direction, i)
    }
  }

  renderHoveredInactiveElementsUnderEditModeUI(canvas: any, span: Vector2D): void {
    span.x === this.numColumns - 1 && this.renderAppendButton(canvas, LayoutDirection.COLUMN, HandleState.INACTIVE)
    span.y === this.numRows - 1 && this.renderAppendButton(canvas, LayoutDirection.ROW, HandleState.INACTIVE)
  }

  renderAllInactiveElementsUnderEditModeUI(canvas: any): void {
    for (let direction of filterNumberValues(LayoutDirection)) this.renderAppendButton(canvas, direction, HandleState.INACTIVE)
  }

  shouldRender(): boolean {
    return !this._bounds.isInvalid() && this._shouldRender !== HideMode.HIDE
  }

  shouldRenderAddButton(): boolean {
    return this.shouldRender() && this._shouldRender === HideMode.FULL
  }

  bounds(): Rectangle {
    return this._bounds.scaledBy(1 / this._canvasScale)
  }

  static hitTestPaddingThreshold: Vector2D
  static padding: number
  static spacing: number
  static borderStrokeWidth: number
  static reorderHandleInactiveSize: Vector2D
  static reorderHandleInactiveCornerRadius: number
  static reorderHandleHoveredLength: number
  static reorderHandleHoveredSize: Vector2D
  static reorderHandleHoveredCornerRadius: number
  static addButtonInactiveRadius: number
  static addButtonHoveredRadius: number
  static appendButtonLength: number
  static appendButtonCornerRadius: number
  static appendButtonPadding: number
  static dividerCornerRadius: number
  static dividerHeight: number
  static dividerHitTestPadding: number
  static plusIconStrokeWidth: number
  static plusIconLength: number
  static equalIconSize: Vector2D
  static equalIconCornerRadius: number
  static equalIconOffsets: Vector2D[]
  static cellStrokeWeight: number
}
TableUIRenderer.hitTestPaddingThreshold = new Vector2D(11, 22)
TableUIRenderer.padding = 18
TableUIRenderer.spacing = 18
TableUIRenderer.borderStrokeWidth = 2
TableUIRenderer.reorderHandleInactiveSize = new Vector2D(18, 6)
TableUIRenderer.reorderHandleInactiveCornerRadius = 4
TableUIRenderer.reorderHandleHoveredLength = 22
TableUIRenderer.reorderHandleHoveredSize = new Vector2D(TableUIRenderer.reorderHandleHoveredLength, TableUIRenderer.reorderHandleHoveredLength)
TableUIRenderer.reorderHandleHoveredCornerRadius = 6
TableUIRenderer.addButtonInactiveRadius = 4
TableUIRenderer.addButtonHoveredRadius = 11
TableUIRenderer.appendButtonLength = 26
TableUIRenderer.appendButtonCornerRadius = 5
TableUIRenderer.appendButtonPadding = 10
TableUIRenderer.dividerCornerRadius = 100
TableUIRenderer.dividerHeight = 4
TableUIRenderer.dividerHitTestPadding = 4
TableUIRenderer.plusIconStrokeWidth = 2
TableUIRenderer.plusIconLength = 12
TableUIRenderer.equalIconSize = new Vector2D(12, 2)
TableUIRenderer.equalIconCornerRadius = 2
TableUIRenderer.equalIconOffsets = [new Vector2D(5, 8), new Vector2D(5, 12)]
TableUIRenderer.cellStrokeWeight = 1
export { TableUIRenderer }
export const Dv = HandleState
export const Ro = TableUIRenderer
export const dw = renderExpandedReorderHandle
export const fl = renderInactiveReorderHandle
export const xT = TableUIElement
