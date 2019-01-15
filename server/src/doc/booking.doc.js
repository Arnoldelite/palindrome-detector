/**
 * @api {post} /booking/create Create
 * @apiGroup Booking
 * @apiVersion 0.1.0
 * @apiParamExample {json} Parameters:
 *     {
        "phoneNumber":
        "email":
        "type": (PICK_UP | DROP_OFF)
        "date": "2018-09-09T10:09:00.000Z"
        "tenantId":
        "driverId":
        "address": {
          "street":
          "city":
          "province":
          "country":
          "postalCode":
          "coordinates":{
              "latitude": 45.339669199999996,
              "longitude": 45.339669199999996
            }
        }
*     }
*/
