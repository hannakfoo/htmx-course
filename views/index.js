const createHomepageTemplate = () => /*html*/ `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Reading List</title>
        <script src="https://unpkg.com/htmx.org@2.0.0" integrity="sha384-wS5l5IKJBvK6sPTKa2WZ1js3d947pvWXbPJ1OmWfEuxLgeHcEbjUUA5i9V5ZkpCw" crossorigin="anonymous"></script>
        <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
        <header>
            <h1>My Reading List</h1>

        </header>
        <main>
            <div class="book-list">
                <button hx-get="/books">Show Books</button>
            </div>
            <div class="add-book-form">
                <h2>What do you want to read?</h2>
                <!-- form template here later -->
            </div>
        </main>
    </body>
    </html>
`;

export default createHomepageTemplate;