import axios from 'axios';

const API_URL = process.env.API_URL || 'https://my-flask-app-csca5028-jing-ac19ad42b89b.herokuapp.com/';

// Configure axios defaults
axios.defaults.baseURL = API_URL;

// Add token to requests
axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export const auth = {
  async login(username, password) {
    try {
      const response = await axios.post('/login', { username, password });
      const { access_token, user } = response.data;
      
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return { success: true, user };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || 'Login failed' 
      };
    }
  },

  async register(username, email, password) {
    try {
      const response = await axios.post('/register', { username, email, password });
      const { access_token, user } = response.data;
      
      localStorage.setItem('token', access_token);
      localStorage.setItem('user', JSON.stringify(user));
      
      return { success: true, user };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || 'Registration failed' 
      };
    }
  },

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser() {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  },

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }
};

export const api = {
  async echo(message) {
    try {
      const response = await axios.post('/echo_user_input', { message });
      return { success: true, data: response.data };
    } catch (error) {
      return { 
        success: false, 
        error: error.response?.data?.error || 'Echo failed' 
      };
    }
  }

  // async getMessages() {
  //   try {
  //     const response = await axios.get('/api/messages');
  //     return { success: true, data: response.data };
  //   } catch (error) {
  //     return { 
  //       success: false, 
  //       error: error.response?.data?.error || 'Failed to fetch messages' 
  //     };
  //   }
  // }
};