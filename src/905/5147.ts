import { baseFigSchema } from '../905/458896'
import { createKiwiCodec, parseSchema } from '../figma_app/870879'

/**
 * Original: $$a0
 * Creates a Kiwi codec for the base Figma schema with parsing enabled.
 */
export const kiwiCodec = createKiwiCodec(true, parseSchema(baseFigSchema));

/**
 * Original: w
 * Alias for the Kiwi codec.
 */
export const w = kiwiCodec;
