
import users from './Users';

const sagas = { ...users };

export default Object.keys(sagas).map(k => sagas[k]);
