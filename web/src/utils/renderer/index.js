import MdIt from 'markdown-it'
import abbr from 'markdown-it-abbr'
import spans from 'markdown-it-bracketed-spans'
import attrs from 'markdown-it-attrs'
import deflist from 'markdown-it-deflist'
import emoji from 'markdown-it-emoji'
import footnote from 'markdown-it-footnote'
import ins from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import multimd_table from 'markdown-it-multimd-table'
import sub from 'markdown-it-sub'
import sup from 'markdown-it-sup'
import checkbox from 'markdown-it-task-checkbox'
import anchor from 'markdown-it-toc-and-anchor'
import pangu from 'markdown-it-pangu'
import container from './markdown-it-container'
import furigana from './markdown-it-furigana'
import katex from './markdown-it-katex'
import mermaid from './markdown-it-mermaid'
import graphviz from './markdown-it-graphviz'
import prism from './markdown-it-prism'
import chart from './markdown-it-chart'
import spoiler from './markdown-it-spoiler'
import excerpt from './markdown-it-excerpt'

let plugins = [
    abbr
    , spans
    , attrs
    , deflist
    , emoji
    , footnote
    , ins
    , mark
    , multimd_table
    , sub
    , sup
    , checkbox
    , anchor
    , pangu
    , container
    , furigana
    , katex
    , mermaid
    , graphviz
    , prism
    , chart
    , spoiler
    , excerpt
]
console.log(plugins)
/**
 * General default plugin config
 * @param  {List} plugins plugin List.
 * @return {List}        plugin List.
 */
function checkPlugins(plugins) {
    var default_plugins_list = {};
    for (var i = 0; i < default_plugins.length; i++) {
        default_plugins_list[default_plugins[i]] = { 'name': default_plugins[i], 'enable': true };
    }

    var _t = [];

    if (plugins) {
        for (var i = 0; i < plugins.length; i++) {
            if (!(plugins[i] instanceof Object) || !(plugins[i].plugin instanceof Object)) {
                continue;
            }
            var plugin_name = plugins[i].plugin.name;
            if (!plugin_name) {
                continue;
            }
            if (plugins[i].plugin.enable == null || plugins[i].plugin.enable == undefined || plugins[i].plugin.enable != true) {
                plugins[i].plugin.enable = false;
            }
            if (default_plugins_list[plugin_name]) {
                default_plugins_list[plugin_name] = plugins[i].plugin;
            } else {
                _t.push(plugins[i].plugin);
            }
        }
    }

    for (var i = default_plugins.length - 1; i >= 0; i--) {
        _t.unshift(default_plugins_list[default_plugins[i]]);
    }

    return _t;
}

let default_config = JSON.parse(`{
    "render": {
        "html": false,
        "xhtmlOut": true,
        "breaks": true,
        "linkify": true,
        "typographer": null,
        "quotes": "“”‘’"
    },
    "plugins": [
        {
            "plugin": {
                "name": "markdown-it-toc-and-anchor",
                "enable": true,
                "options": {
                    "tocClassName": "toc",
                    "anchorClassName": "anchor"
                }
            }
        },
        {
            "plugin": {
                "name": "markdown-it-multimd-table",
                "enable": true,
                "options": {
                    "multiline": true,
                    "rowspan": true,
                    "headerless": true
                }
            }
        },
        {
            "plugin": {
                "name": "./markdown-it-furigana",
                "enable": true,
                "options": {
                    "fallbackParens": "()"
                }
            }
        },
        {
            "plugin": {
                "name": "./markdown-it-spoiler",
                "enable": true,
                "options": {
                    "title": "你知道得太多了"
                }
            }
        }
    ]
}`)

console.log(default_config)
export default function (data, options) {
    const cfg = default_config
    const opt = cfg ? cfg : 'default';
    let parser = opt === 'default' || opt === 'commonmark' || opt === 'zero' ?
        new MdIt(opt) :
        new MdIt(opt.render);


    let plugins = checkPlugins(opt.plugins);

    parser = plugins.reduce((parser, plugins) => {
        if (plugins.enable) {
            let plugin = require(plugins.name);

            if (typeof plugin !== 'function' && typeof plugin.default === 'function') {
                plugin = plugin.default;
            }

            if (plugins.options) {
                return parser.use(plugin, plugins.options);
            } else {
                return parser.use(plugin);
            }

        } else return parser;

    }, parser);


    return parser.render(data.text);
}