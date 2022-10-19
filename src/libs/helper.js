/**
 * 
 * @param {*} html It's a html cotent for cleaning the html markup from the content
 * @returns the plain text after removing html tag
 */
export const stripsHtmlTag = (html) => {
    if (!html) { return; }

    let div = document.createElement("div");
    div.innerHTML = html;

    return div.innerText;
}

/**
 * 
 * @param {*} date : It will be date string
 * @returns It will return the formated/readable date for our templates
 */
export const formatedDate = (date) => {
    let d = new Date(date),
        fullDate = new Intl.DateTimeFormat('en-GB', { weekday: 'short', year: 'numeric', month: 'short', day: "2-digit" }).format(d),
        time = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit' }).format(d);

    return fullDate.replace(',', '') + ' ' + time.replace(':', '.') + ' BST';
}