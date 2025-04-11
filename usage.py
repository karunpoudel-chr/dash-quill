import dash_quill
from dash import Dash, callback, dcc, html, Input, Output, State

app = Dash(__name__)
quill_toolbar = [
    [{ 'header': [1, 2, 3, False] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}, { 'script': 'sub'}, { 'script': 'super' }],
    ['color', 'background',  'link', 'image'],
    ['clean']
]
app.layout = html.Div([
    # Basic tool
    dash_quill.Quill(
        id='input',
        modules={},
    ),
    html.Pre(id='output'),
    html.Br(),
    # custom tool
    dash_quill.Quill(
        id='input2',
        value='',
        modules={'toolbar':quill_toolbar, 'clipboard':{'matchVisual': False}},
        placeholder="Enter your text here",
    ),
    html.Br(),
    html.Pre(id='output2'),
])


@callback(Output('output', 'children'), [Input('input', 'value')],[State('input', 'charCount')])
def display_output(value,charCount):
    return 'You have entered:\n{0}\n\nNo. chars: {1}'.format(value,charCount)

@callback(Output('output2', 'children'), [Input('input2', 'value')],[State('input2', 'charCount')])
def display_output2(value,charCount):
    return 'You have entered:\n{0}\n\nNo. chars: {1}'.format(value,charCount)


if __name__ == '__main__':
    app.run(debug=True)
