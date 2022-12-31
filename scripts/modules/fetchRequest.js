const fetchRequest = async (url, {
  method = 'GET',
  callback,
  body,
  headers
}) => {
  try {
    const options = {
      method
    };

    if (body) options.body = JSON.stringify(body);
    if (headers) options.headers = headers;

    const response = await fetch(url, options);

    if (response.ok) {
      const data = await response.json();
      if (callback) callback(null, data);
      return;
    }

    throw new Error(response.status);
  } catch (err) {
    callback(err);
  }
};