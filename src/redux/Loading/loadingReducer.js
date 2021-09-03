export function loadingReducer(state = false, action) {
  switch (action.type) {
    case 'contacts/executeQuery/pending':
      return true;
    case 'contacts/executeQuery/fulfilled':
      return false;
    case 'contacts/executeQuery/rejected':
      return false;
    case 'contacts/executeMutation/pending':
      return true;
    case 'contacts/executeMutation/fulfilled':
      return false;
    case 'contacts/executeMutation/rejected':
      return false;
    default:
      return state;
  }
}
