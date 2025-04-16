# AUTO GENERATED FILE - DO NOT EDIT

export 'dre'_quill

"""
    'dre'_quill(;kwargs...)

A Quill component.
A Quill-Based Rich Text Editor Component for Dash
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
slateContent={SlateRTE.deserializeHTMLString(value)}
- `charCount` (Real; optional): The number of charaters in the editor (excl HTML)
- `className` (String; optional): Class Name for the div container containing quill
- `formats` (Array; optional): A list of formats that are recognized.
Should be [list of options]
- `maxLength` (Real; optional): Maximum number of characters allowed.
- `modules` (Dict; optional): The toolbar options modules.
Should be {'toolbar':[list of options]}
- `placeholder` (String; optional): Placeholder text to show when editor is empty.
- `preserveWhitespace` (Bool; optional): If true, a pre tag is used for the editor area instead of the default div tag. This prevents Quill from collapsing continuous whitespaces on paste. https://github.com/slab/quill/issues/1751
- `readOnly` (Bool; optional): Whether to instantiate the editor to read-only mode.
- `style` (Dict; optional): An object with custom CSS rules to apply on the editor's container
- `tabIndex` (Real; optional): The order in which the editor becomes focused, among other controls in the page, during keyboard navigation.
- `theme` (String; optional): Name of theme to use. The builtin options are "bubble" or "snow".
- `value` (String; optional): The value displayed in the input.
"""
function 'dre'_quill(; kwargs...)
        available_props = Symbol[:id, :charCount, :className, :formats, :maxLength, :modules, :placeholder, :preserveWhitespace, :readOnly, :style, :tabIndex, :theme, :value]
        wild_props = Symbol[]
        return Component("'dre'_quill", "Quill", "dash_quill", available_props, wild_props; kwargs...)
end

