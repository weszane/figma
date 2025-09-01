import { baseFigSchema } from '../905/458896'
import { parseAndValidate } from '../905/713504'
import { createKiwiCodec } from '../figma_app/870879'

export let kiwiParserCodec = createKiwiCodec(!1, parseAndValidate(baseFigSchema))
// export const kiwiParserCodec = kiwiParserCodec
