
export const initialModel = {
  PDF: {
    name: "untitled",
    template: {
      footer: {
        __typename: "Stack",
        styleJson: JSON.stringify({
          marginTop: 0,
          marginRight: 37,
          marginLeft: 37,
          marginBottom: 30
        }),
        items: []
      },
      header: {
        __typename: "Stack",
        items: []
      },
      margin: [10, 80, 10, 40],
      documents: [
        {
          features: {
            items: []
          }
        }
      ]
    }
  },
  showPDF: true
}
