# AUTO GENERATED FILE - DO NOT EDIT

#' @export
'dre'Quill <- function(id=NULL, charCount=NULL, className=NULL, formats=NULL, maxLength=NULL, modules=NULL, placeholder=NULL, preserveWhitespace=NULL, readOnly=NULL, style=NULL, tabIndex=NULL, theme=NULL, value=NULL) {
    
    props <- list(id=id, charCount=charCount, className=className, formats=formats, maxLength=maxLength, modules=modules, placeholder=placeholder, preserveWhitespace=preserveWhitespace, readOnly=readOnly, style=style, tabIndex=tabIndex, theme=theme, value=value)
    if (length(props) > 0) {
        props <- props[!vapply(props, is.null, logical(1))]
    }
    component <- list(
        props = props,
        type = 'Quill',
        namespace = 'dash_quill',
        propNames = c('id', 'charCount', 'className', 'formats', 'maxLength', 'modules', 'placeholder', 'preserveWhitespace', 'readOnly', 'style', 'tabIndex', 'theme', 'value'),
        package = 'dashQuill'
        )

    structure(component, class = c('dash_component', 'list'))
}
