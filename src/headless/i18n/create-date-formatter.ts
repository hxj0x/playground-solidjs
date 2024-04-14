/*!
 * Portions of this file are based on code from react-spectrum.
 * Apache License Version 2.0, Copyright 2020 Adobe.
 *
 * Credits to the React Spectrum team:
 * https://github.com/adobe/react-spectrum/blob/15e101b74966bd5eb719c6529ce71ce57eaed430/packages/@react-aria/i18n/src/useDateFormatter.ts
 */
// TODO 根据文档优化包大小 https://react-spectrum.adobe.com/react-aria/internationalization.html
import { DateFormatter } from "@internationalized/date";
import { Accessor, createMemo } from "solid-js";

import { MaybeAccessor, access } from "@solid-primitives/utils";
import { useLocale } from "./i18n-provider";

export interface DateFormatterOptions extends Intl.DateTimeFormatOptions {
  calendar?: string;
}

/**
 * Provides localized date formatting for the current locale. Automatically updates when the locale changes,
 * and handles caching of the date formatter for performance.
 * @param options - Formatting options.
 */
export function createDateFormatter(
  options: MaybeAccessor<DateFormatterOptions>
): Accessor<DateFormatter> {
  const { locale } = useLocale();

  return createMemo(() => new DateFormatter(locale(), access(options)));
}
