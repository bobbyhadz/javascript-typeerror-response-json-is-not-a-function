// TypeError: response.json is not a function in JavaScript

// EXAMPLE 1 - Call the `json()` method on a valid `Response` object

async function getUser() {
  try {
    const response = await fetch('https://randomuser.me/api/');

    if (!response.ok) {
      throw new Error(`Error! status: ${response.status}`);
    }

    // ✅ call response.json() here
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
}

getUser().then(res => {
  console.log(res);
});

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using the .then() syntax

// function getUser() {
//   return (
//     fetch('https://randomuser.me/api/')
//       // ✅ call response.json() here
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   );
// }

// getUser();

// ------------------------------------------------------------------

// // EXAMPLE 3 - Solve the error when using `axios`

// import axios from 'axios';

// async function getUser() {
//   try {
//     const response = await axios.get(
//       'https://randomuser.me/api/',
//       {
//         headers: {'Accept-Encoding': 'gzip,deflate,compress'},
//       },
//     );

//     return response.data;
//   } catch (err) {
//     console.log(err);
//   }
// }

// getUser().then(response => {
//   console.log(response);
// });

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using the .then() syntax with axios

// import axios from 'axios';

// async function getUser() {
//   return axios
//     .get('https://randomuser.me/api/', {
//       headers: {'Accept-Encoding': 'gzip,deflate,compress'},
//     })
//     .then(response => {
//       console.log(response.data);
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }

// getUser().then(res => {
//   console.log(res);
// });
