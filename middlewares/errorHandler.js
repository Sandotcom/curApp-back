const errorHandler = (error, req, res, next) => {
  console.error(error);

  const status = error.status || 500;
  const message = error.message || error;

  return res.status(status).json({ status: 'fail', message });
};

export default errorHandler;
