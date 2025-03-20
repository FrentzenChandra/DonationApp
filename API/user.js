import auth from '@react-native-firebase/auth';
import store from '../redux/Store';
import {updateToken} from '../redux/reducers/User';

const createUser = async (fullName, email, password) => {
  try {
    const userInfo = await auth().createUserWithEmailAndPassword(
      email,
      password,
    );
    await userInfo.user.updateProfile({displayName: fullName});
    console.log('Berhasil');
    return {data: userInfo, message: 'Success', error: null, code: 200};
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      return {
        data: {},
        message: 'Your Account is already Exist',
        error: error,
        code: 409,
      };
    } else if (error.code === 'auth/invalid-email') {
      return {
        data: {},
        message: 'Invalid Email',
        error: error,
        code: 404,
      };
    }

    return {
      data: {},
      message: 'Your Request Failed',
      error: error,
      code: 400,
    };
  }
};

const loginUser = async (email, password) => {
  try {
    const userInfo = await auth().signInWithEmailAndPassword(email, password);
    const token = await userInfo.user.getIdToken();
    return {
      data: {
        displayName: userInfo.user.displayName,
        email: userInfo.user.email,
        token,
      },
      message: 'Success',
      error: '',
      code: 500,
    };
  } catch (error) {
    if (error.code === 'auth/user-not-found') {
      return {
        data: {},
        message: 'User Not found Try Register',
        error: error,
        code: 400,
      };
    }

    if (error.code === 'auth/invalid-email') {
      return {
        data: {},
        message: 'That email address is Invalid!',
        error: error,
        code: 401,
      };
    }

    return {
      data: {},
      message: 'Failed Request!',
      error: error,
      code: 400,
    };
  }
};

const logoutUser = async () => {
  try {
    const response = await auth().signOut();
    console.log(response);
  } catch (error) {
    console.log(error);
    return {
      data: {},
      message: 'Failed Request!',
      error: error,
      code: 400,
    };
  }
};

const checkToken = async () => {
  try {
    let newToken = await auth().currentUser.getIdToken(true);
    console.log('We are updating token for you');
    console.log(newToken);
    store.dispatch(updateToken(newToken));
  } catch (error) {
    console.log(error);
  }
};

export {createUser, loginUser, logoutUser, checkToken};
