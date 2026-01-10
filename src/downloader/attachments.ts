import type { Attachment, Awaitable, Message } from 'discord.js';

/**
 * Callback used to save an attachment.
 * The returned string is the URL that will be used in the transcript.
 *
 * `undefined` indicates to use the original attachment URL.
 * `null` indicates to not include the attachment in the transcript.
 * `string` indicates to use the returned URL as the attachment URL (base64 or remote image).
 */
export type ResolveAttachmentCallback = (
  attachment: Attachment,
  message: Message
) => Awaitable<string | null | undefined>;