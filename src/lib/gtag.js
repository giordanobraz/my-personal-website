export const G_TAG_ID =  "G-NNQMNNCNE7";

export const pageview = (url) => {
  window.gtag('config', G_TAG_ID, {
    page_path: url,
  })
}

export const event = ({ action, category, label, value }) => {
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  })
}