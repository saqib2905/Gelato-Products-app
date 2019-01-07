import axios from 'axios';
export const fetchData = (productId) => {
    const payload = {
        "order": {
            "orderReferenceId": 84110,
            "customerReferenceId": 85110,
            "currencyIsoCode": "NOK"
        },
        "recipient": {
            "countryIsoCode": "NO",
            "addressLine1": "Snarøyveien 30C",
            "addressLine2": "Gelato AS",
            "city": "Fornebu",
            "postcode": "1360",
            "firstName": "Eivind",
            "lastName": "Ingebrigtsen",
            "email": "eivind@gelato.com",
            "phone": "+4793685139"
        },
        "product": {
            "itemReferenceId": 86110,
            "productUid": productId,
            "pdfUrl": "https://www.dropbox.com/s/nh7kdv6jam5bfsy/B-C-Eivind.pdf?dl=1",
            "quantity": 278
        }
      };
      var authOptions = {
        method: 'POST',
        url: '/api/quote',
        data: (payload),
        crossdomain: true,
        withCredentials: true,
        auth: {
          username: 'admin',
          password: 'supersecret'
        },
        headers: {
            'Authorization': 'Basic YWRtaW46c3VwZXJzZWNyZXQ=',
            'X-API-KEY' : 'UIYQWENKASDPOIU&(/!BKJADSA%&/(ASDA',
            'Content-Type': 'application/json; charset=utf-8',
            "Access-Control-Allow-Origin": "*"
            
        },
        json: true
      };
      return axios(authOptions);
};