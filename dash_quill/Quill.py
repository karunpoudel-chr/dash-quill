# AUTO GENERATED FILE - DO NOT EDIT

import typing  # noqa: F401
import numbers # noqa: F401
from typing_extensions import TypedDict, NotRequired, Literal # noqa: F401
from dash.development.base_component import Component, _explicitize_args
try:
    from dash.development.base_component import ComponentType # noqa: F401
except ImportError:
    ComponentType = typing.TypeVar("ComponentType", bound=Component)


class Quill(Component):
    """A Quill component.
A Quill-Based Rich Text Editor Component for Dash

Keyword arguments:

- id (string; optional):
    The ID used to identify this component in Dash callbacks.
    slateContent={SlateRTE.deserializeHTMLString(value)}.

- charCount (number; optional):
    The number of charaters in the editor (excl HTML).

- formats (list; optional):
    A list of formats that are recognized. Should be [list of
    options].

- modules (dict; optional):
    The toolbar options modules. Should be {'toolbar':[list of
    options]}.

- placeholder (string; optional):
    Placeholder text to show when editor is empty.

- preserveWhitespace (boolean; optional):
    If True, a pre tag is used for the editor area instead of the
    default div tag. This prevents Quill from collapsing continuous
    whitespaces on paste. https://github.com/slab/quill/issues/1751.

- readOnly (boolean; optional):
    Whether to instantiate the editor to read-only mode.

- tabIndex (number; optional):
    The order in which the editor becomes focused, among other
    controls in the page, during keyboard navigation.

- theme (string; optional):
    Name of theme to use. The builtin options are \"bubble\" or
    \"snow\".

- value (string; optional):
    The value displayed in the input."""
    _children_props = []
    _base_nodes = ['children']
    _namespace = 'dash_quill'
    _type = 'Quill'

    @_explicitize_args
    def __init__(
        self,
        id: typing.Optional[typing.Union[str, dict]] = None,
        value: typing.Optional[str] = None,
        charCount: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        modules: typing.Optional[dict] = None,
        formats: typing.Optional[typing.Sequence] = None,
        placeholder: typing.Optional[str] = None,
        readOnly: typing.Optional[bool] = None,
        preserveWhitespace: typing.Optional[bool] = None,
        theme: typing.Optional[str] = None,
        style: typing.Optional[typing.Any] = None,
        tabIndex: typing.Optional[typing.Union[int, float, numbers.Number]] = None,
        **kwargs
    ):
        self._prop_names = ['id', 'charCount', 'formats', 'modules', 'placeholder', 'preserveWhitespace', 'readOnly', 'style', 'tabIndex', 'theme', 'value']
        self._valid_wildcard_attributes =            []
        self.available_properties = ['id', 'charCount', 'formats', 'modules', 'placeholder', 'preserveWhitespace', 'readOnly', 'style', 'tabIndex', 'theme', 'value']
        self.available_wildcard_properties =            []
        _explicit_args = kwargs.pop('_explicit_args')
        _locals = locals()
        _locals.update(kwargs)  # For wildcard attrs and excess named props
        args = {k: _locals[k] for k in _explicit_args}

        super(Quill, self).__init__(**args)
