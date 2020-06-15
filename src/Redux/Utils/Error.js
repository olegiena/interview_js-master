
const STATUS_CODE_REGEX = /^.*(\d{3}).*$/;

export const errorHandler = error => {
  return error.json ? { error: error.json() } : Promise.resolve({ error: constructErrorRespCode(error) });
};

const constructErrorRespCode = error => {
  const [ , code ] = error.message.match(STATUS_CODE_REGEX);
  
  switch (code) {
    case '500': return { code, message: 'SERVER ERROR' };
    default: return error;
  }
};
