% Auto-generated: do not edit by hand
\name{'dre'Quill}

\alias{'dre'Quill}

\title{Quill component}

\description{
A Quill-Based Rich Text Editor Component for Dash
}

\usage{
'dre'Quill(id=NULL, charCount=NULL, className=NULL, formats=NULL,
maxLength=NULL, modules=NULL, placeholder=NULL,
preserveWhitespace=NULL, readOnly=NULL, style=NULL,
tabIndex=NULL, theme=NULL, value=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.
slateContent={SlateRTE.deserializeHTMLString(value)}}

\item{charCount}{Numeric. The number of charaters in the editor (excl HTML)}

\item{className}{Character. Class Name for the div container containing quill}

\item{formats}{Unnamed list. A list of formats that are recognized.
Should be [list of options]}

\item{maxLength}{Numeric. Maximu number of characters allowed.}

\item{modules}{Named list. The toolbar options modules.
Should be {'toolbar':[list of options]}}

\item{placeholder}{Character. Placeholder text to show when editor is empty.}

\item{preserveWhitespace}{Logical. If true, a pre tag is used for the editor area instead of the default div tag. This prevents Quill from collapsing continuous whitespaces on paste. https://github.com/slab/quill/issues/1751}

\item{readOnly}{Logical. Whether to instantiate the editor to read-only mode.}

\item{style}{Named list. An object with custom CSS rules to apply on the editor's container}

\item{tabIndex}{Numeric. The order in which the editor becomes focused, among other controls in the page, during keyboard navigation.}

\item{theme}{Character. Name of theme to use. The builtin options are "bubble" or "snow".}

\item{value}{Character. The value displayed in the input.}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

