# API Documentation

## Endpoint: `/user/register`

### Description

This endpoint is used to register a new user in the system.

### Method

`POST`

### Request Body

The request body must be in JSON format and include the following fields:

| Field                | Type   | Required | Description                                        |
| -------------------- | ------ | -------- | -------------------------------------------------- |
| `fullname.firstname` | String | Yes      | The first name of the user (minimum 3 characters). |
| `fullname.lastname`  | String | No       | The last name of the user (minimum 3 characters).  |
| `email`              | String | Yes      | The email address of the user (must be valid).     |
| `password`           | String | Yes      | The password for the user (minimum 6 characters).  |

### Validation Rules

- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.

### Response

#### Success (201 Created)

- **Description**: User successfully registered.
- **Body**:
  ```json
  {
    "token": "string",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Error (400 Bad Request)

- **Description**: Validation errors or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

### Example Request

```bash
curl -X POST http://localhost:PORT/user/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

---

## Endpoint: `/user/login`

### Description
This endpoint is used to authenticate a user and provide a JWT token.

### Method
`POST`

### Request Body
The request body must be in JSON format and include the following fields:

| Field     | Type   | Required | Description                                   |
|-----------|--------|----------|-----------------------------------------------|
| `email`   | String | Yes      | The email address of the user (must be valid). |
| `password`| String | Yes      | The password for the user (minimum 6 characters). |

### Validation Rules
- `email` must be a valid email address.
- `password` must be at least 6 characters long.

### Response

#### Success (200 OK)
- **Description**: User successfully authenticated.
- **Body**:
  ```json
  {
    "token": "string",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Error (400 Bad Request)
- **Description**: Validation errors or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

#### Error (401 Unauthorized)
- **Description**: Invalid email or password.
- **Body**:
  ```json
  {
    "error": "Invalid email or password"
  }
  ```

### Example Request
```bash
curl -X POST http://localhost:PORT/user/login \
-H "Content-Type: application/json" \
-d '{
  "email": "john.doe@example.com",
  "password": "password123"
}'
```

---

## Endpoint: `/user/profile`

### Description
This endpoint is used to retrieve the profile of the authenticated user.

### Method
`GET`

### Headers
| Header          | Type   | Required | Description                  |
|------------------|--------|----------|------------------------------|
| `Authorization` | String | Yes      | Bearer token for authentication. |

### Response

#### Success (200 OK)
- **Description**: User profile retrieved successfully.
- **Body**:
  ```json
  {
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string"
    }
  }
  ```

#### Error (401 Unauthorized)
- **Description**: Missing or invalid token.
- **Body**:
  ```json
  {
    "error": "Unauthorized"
  }
  ```

---

## Endpoint: `/user/logout`

### Description
This endpoint is used to log out the authenticated user.

### Method
`GET`

### Headers
| Header          | Type   | Required | Description                  |
|------------------|--------|----------|------------------------------|
| `Authorization` | String | Yes      | Bearer token for authentication. |

### Response

#### Success (200 OK)
- **Description**: User successfully logged out.
- **Body**:
  ```json
  {
    "message": "User logged out successfully"
  }
  ```

#### Error (401 Unauthorized)
- **Description**: Missing or invalid token.
- **Body**:
  ```json
  {
    "error": "Unauthorized"
  }
  ```

# API Documentation

## Captain Routes

### Endpoint: `/captain/register`

#### Description
This endpoint is used to register a new captain in the system.

#### Method
`POST`

#### Request Body
The request body must be in JSON format and include the following fields:

| Field                     | Type   | Required | Description                                        |
|---------------------------|--------|----------|--------------------------------------------------|
| `fullname.firstname`      | String | Yes      | The first name of the captain (minimum 3 characters). |
| `fullname.lastname`       | String | No       | The last name of the captain (minimum 3 characters).  |
| `email`                   | String | Yes      | The email address of the captain (must be valid).     |
| `password`                | String | Yes      | The password for the captain (minimum 6 characters).  |
| `vehicle.color`           | String | Yes      | The color of the vehicle (minimum 3 characters).      |
| `vehicle.plate`           | String | Yes      | The license plate of the vehicle (minimum 3 characters). |
| `vehicle.capacity`        | Number | Yes      | The capacity of the vehicle (minimum 1).              |
| `vehicle.vehicleType`     | String | Yes      | The type of the vehicle (`car`, `motorcycle`, or `auto`). |

#### Validation Rules
- `email` must be a valid email address.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.
- `vehicle.color` must be at least 3 characters long.
- `vehicle.plate` must be at least 3 characters long.
- `vehicle.capacity` must be an integer greater than or equal to 1.
- `vehicle.vehicleType` must be one of `car`, `motorcycle`, or `auto`.

#### Response

##### Success (201 Created)
- **Description**: Captain successfully registered.
- **Body**:
  ```json
  {
    "token": "string",
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "number",
        "vehicleType": "string"
      }
    }
  }
  ```

##### Error (400 Bad Request)
- **Description**: Validation errors or missing required fields.
- **Body**:
  ```json
  {
    "errors": [
      {
        "msg": "string",
        "param": "string",
        "location": "string"
      }
    ]
  }
  ```

---

### Example Request
```bash
curl -X POST http://localhost:PORT/captain/register \
-H "Content-Type: application/json" \
-d '{
  "fullname": {
    "firstname": "Jane",
    "lastname": "Doe"
  },
  "email": "jane.doe@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}'
```


