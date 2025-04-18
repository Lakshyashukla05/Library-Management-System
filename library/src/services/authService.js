


export const login = async (email, password) => {
  try {

    if (email === 'user@example.com' && password === 'password123') {
      
      const userData = {
        id: 1,
        name: 'John Doe',
        email: 'user@example.com',
        token: 'mockToken123',
      };

      
      localStorage.setItem('user', JSON.stringify(userData));

      return { success: true, data: userData };
    } else {
      return { success: false, message: 'Invalid email or password.' };
    }
  } catch (error) {
    console.error('Login error:', error);
    return { success: false, message: 'An error occurred during login.' };
  }
};


export const isLoggedIn = () => {
  const user = localStorage.getItem('user');
  return user ? JSON.parse(user) : null;
};


export const logout = () => {
  localStorage.removeItem('user');
};
