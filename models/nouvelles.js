const Model = require('./model');
module.exports =
    class Nouvelle extends Model {
        constructor(category,title,text,imageUrl,date) {
            super();
            this.Category = category !== undefined ? category : "";
            this.Title = title !== undefined ? titre : "";
            this.Text = text !== undefined ? texte : "";
            this.ImageUrl = imageUrl !== undefined ? imageUrl : "";
            this.Date = date !== undefined ? date : "";

            this.setKey("Title");
            this.addValidator('Category', 'string');
            this.addValidator('Title', 'string');
            this.addValidator('Text', 'string');
            this.addValidator('ImageUrl', 'string');
            this.addValidator('Date', 'string');
        }
    }