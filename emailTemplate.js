export const emailTemplate = (name) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossorigin="anonymous"
      ></script>
  
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap"
        rel="stylesheet"
      />
  
      <style>
        body {
          background-color: antiquewhite;
        }
      </style>
      <title>Email</title>
    </head>
    <body>
      <div class="">
        <div class="d-flex justify-content-center m-4">
          <div class="bg-white col-12 p-3">
            <h1 style="font-weight: 400">Hi, ${name}</h1>
  
            <br />
  
            <p>
              Thank you for contacting Mighty Eagle to be your programming
              instructor.
            </p>
            <p>Do find below our price range for tuition</p>
            <div class="mt-3">
              <table class="table table-condensed">
                <thead>
                  <tr>
                    <th>Package</th>
                    <th>Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Web Development (HTML, CSS, JavaScript)</td>
                    <td>₦150,000.00</td>
                  </tr>
                  <tr>
                    <td>Server Side Development</td>
                    <td>₦200,000.00</td>
                  </tr>
                  <tr>
                    <td>Desktop Applications Development</td>
                    <td>₦250,000.00</td>
                  </tr>
                  <tr>
                    <td>Web Frameworks</td>
                    <td>₦250,000.00</td>
                  </tr>
                  <tr>
                    <td>Mobile Applications</td>
                    <td>₦250,000.00</td>
                  </tr>
                  <tr>
                    <td>Database</td>
                    <td>₦250,000.00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="mt-5">
              <blockquote>
                We offer the best in our services even as we ensure to make you a
                world class software developer.
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>
  `;
};
