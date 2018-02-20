// common to all pages of the app
module.exports = function CommonPage() {
    var heading = element(by.css('h2'));
    this.getHeading = function() {
        return heading.getText();
    };
};
