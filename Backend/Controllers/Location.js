exports.getLocation = (_, res) => {
  try {
    const googleMapsUrl = "https://www.google.com/maps/place/House+Cookies+Arg/@-34.6041859,-58.4339531,17z/data=!3m1!4b1!4m6!3m5!1s0x95bccbc9502a851f:0x3dec08b7a44f6d2d!8m2!3d-34.604186!4d-58.4290822!16s%2Fg%2F11l8r5_j6t?entry=ttu";
    console.log('Éxito al obtener la URL de Google Maps');
    res.json({ url: googleMapsUrl });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la URL de Google Maps' });
  }
};