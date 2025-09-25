/**
 * ChannelHandler type defines the structure for channel handler objects.
 */
export interface ChannelHandler {
  /**
   * Determines if the handler should process the given channel string.
   * @param channel - The channel string to check.
   * @returns True if the handler should process the channel.
   */
  shouldHandle: (channel: string) => boolean
  /**
   * Parses arguments from the channel string.
   * @param channel - The channel string to parse.
   * @returns Parsed arguments or an empty object/string.
   */
  parseChannelArgs: (channel: string) => any
}

/**
 * Handles "/me-" channels.
 * Original variable: $$n4
 */
export const meChannelHandler: ChannelHandler = {
  shouldHandle: (channel: string) => channel.startsWith('/me-'),
  parseChannelArgs: () => ({}),
}

/**
 * Handles "/team-members-" channels.
 * Original variable: $$r2
 */
export const teamMembersChannelHandler: ChannelHandler = {
  shouldHandle: (channel: string) => channel.startsWith('/team-members-'),
  parseChannelArgs: (channel: string) => {
    // Splits the channel and returns the argument after "/team-members-"
    const [, args] = channel.split('/team-members-')
    return args
  },
}

/**
 * Handles "/file-" channels.
 * Original variable: $$a5
 */
export const fileChannelHandler: ChannelHandler = {
  shouldHandle: (channel: string) => channel.startsWith('/file-'),
  parseChannelArgs: (channel: string) => {
    const [, args] = channel.split('/file-')
    return args
  },
}

/**
 * Handles "/folder-" channels.
 * Original variable: $$s1
 */
export const folderChannelHandler: ChannelHandler = {
  shouldHandle: (channel: string) => channel.startsWith('/folder-'),
  parseChannelArgs: (channel: string) => {
    const [, args] = channel.split('/folder-')
    return args
  },
}

/**
 * Handles "/file_repo-" channels.
 * Original variable: $$o0
 */
export const fileRepoChannelHandler: ChannelHandler = {
  shouldHandle: (channel: string) => channel.startsWith('/file_repo-'),
  parseChannelArgs: (channel: string) => {
    const [, args] = channel.split('/file_repo-')
    return args
  },
}

/**
 * Handles "/org-members-" channels.
 * Original variable: $$l3
 */
export const orgMembersChannelHandler: ChannelHandler = {
  shouldHandle: (channel: string) => channel.startsWith('/org-members-'),
  parseChannelArgs: (channel: string) => {
    const [, args] = channel.split('/org-members-')
    return args
  },
}

// Refactored exports to match new handler names
export const Ut = fileRepoChannelHandler
export const aj = folderChannelHandler
export const fJ = teamMembersChannelHandler
export const uf = orgMembersChannelHandler
export const uu = meChannelHandler
export const w7 = fileChannelHandler
