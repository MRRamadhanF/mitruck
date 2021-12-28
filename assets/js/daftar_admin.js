(function () {

    var db = {

        loadData: function (filter) {
            return $.grep(this.clients, function (client) {
                return (filter.ID === undefined || client.ID === filter.ID)
                    && (!filter.Nama || client.Nama.indexOf(filter.Nama) > -1)
                    && (!filter.Handphone || client.Handphone.indexOf(filter.Handphone) > -1)
                    && (!filter.Email || client.Email.indexOf(filter.Email) > -1)
            });
        },

        insertItem: function (insertingClient) {
            this.clients.push(insertingClient);
        },

        updateItem: function (updatingClient) { },

        deleteItem: function (deletingClient) {
            var clientIndex = $.inArray(deletingClient, this.clients);
            this.clients.splice(clientIndex, 1);
        }

    };

    window.db = db;

    db.clients = [
        {
            "ID": 1,
            "Nama": "Bima Satria Garuda",
            "Handphone": "+6281234567890",
            "Email": "bima@satria.co.id"
        },
        {
            "ID": 2,
            "Nama": "Rama Dan Sinta",
            "Handphone": "+6280987654321",
            "Email": "ramasinta@gmail.com"
        },
        {
            "ID": 3,
            "Nama": "Zainuddin",
            "Handphone": "+6285432167890",
            "Email": "zain_udin@yahoo.com"
        },
        {
            "ID": 4,
            "Nama": "Hayati",
            "Handphone": "+6286789054321",
            "Email": "haya.ati@gmail.com"
        },
        {
            "ID": 5,
            "Nama": "Yunida Salsabila",
            "Handphone": "+6281230984567",
            "Email": "yunida.salsabila@gmail.com"
        },
        {
            "ID": 6,
            "Nama": "M. Ridha Ramadhan Fatriendi",
            "Handphone": "+6280981237654",
            "Email": "ramadf@gmail.com"
        },
        {
            "ID": 7,
            "Nama": "Febrianty Rakhmana",
            "Handphone": "+6286785439021",
            "Email": "fby@yahoo.com"
        },
        {
            "ID": 8,
            "Nama": "Nicolaus Desca Rallo",
            "Handphone": "+6245623417891",
            "Email": "nicorallo@gmail.com"
        },
        {
            "ID": 1,
            "Nama": "Bima Satria Garuda",
            "Handphone": "+6281234567890",
            "Email": "bima@satria.co.id"
        },
        {
            "ID": 2,
            "Nama": "Rama Dan Sinta",
            "Handphone": "+6280987654321",
            "Email": "ramasinta@gmail.com"
        },
        {
            "ID": 3,
            "Nama": "Zainuddin",
            "Handphone": "+6285432167890",
            "Email": "zain_udin@yahoo.com"
        },
        {
            "ID": 4,
            "Nama": "Hayati",
            "Handphone": "+6286789054321",
            "Email": "haya.ati@gmail.com"
        },
        {
            "ID": 5,
            "Nama": "Yunida Salsabila",
            "Handphone": "+6281230984567",
            "Email": "yunida.salsabila@gmail.com"
        },
        {
            "ID": 6,
            "Nama": "M. Ridha Ramadhan Fatriendi",
            "Handphone": "+6280981237654",
            "Email": "ramadf@gmail.com"
        },
        {
            "ID": 7,
            "Nama": "Febrianty Rakhmana",
            "Handphone": "+6286785439021",
            "Email": "fby@yahoo.com"
        },
        {
            "ID": 8,
            "Nama": "Nicolaus Desca Rallo",
            "Handphone": "+6245623417891",
            "Email": "nicorallo@gmail.com"
        },
    ];

}());