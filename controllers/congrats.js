function congratsPage(req, res) {
    res.render('congrats', {
        locals: {
            congrats: 'You did it!!!'
        }
    })
}

module.exports = congratsPage;