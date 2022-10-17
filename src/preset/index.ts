import { Preset } from 'unocss';
import { PresetInklineOptions, Theme } from './types';
import { rules } from './rules';
import { DEFAULT_CLASS_PREFIX } from './constants';

export const presetInkline = (options: PresetInklineOptions = {}): Preset<Theme> => {
    options.prefix = options.prefix ?? DEFAULT_CLASS_PREFIX;

    return {
        name: '@unocss/preset-mini',
        // theme,
        rules: rules(options),
        // variants: variants(options),
        options
        // postprocess: options.variablePrefix && options.variablePrefix !== 'un-'
        //     ? VarPrefixPostprocessor(options.variablePrefix)
        //     : undefined,
        // preflights: options.preflight ? preflights : [],
        // prefix: options.prefix,
    };
};

export default presetInkline;