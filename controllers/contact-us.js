
exports.getContactUs = (req, res, next) => {
    res.render('contact-us', {
        pageTitle: 'Contact Us',
        path: '/contacts/contact-us',
        formsCSS: true,
        activeContactUs: true
    });
};

exports.postContactUs = (req, res, next) => {
    const { name, mobile, email } = req.body;
    console.log(`Received Contact Form Submission - Name: ${name}, Mobile: ${mobile}, Email: ${email}`)  
    res.redirect('/thank-you');
};