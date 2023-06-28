import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../../api/api.js';

export const getAllData = (name, url) => {
  return createAsyncThunk(name, async (id, thunkAPI) => {
    console.log(id)
    try {
      console.log(url, id)
      const response = await api.get(id ? `${url}/${id}` : url);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
};



// Async thunk action creator for deleteById
export const deleteById = createAsyncThunk(
  'common/deleteById',
  async (payload, thunkAPI) => {
    const { url, id } = payload;
    try {
      await api.delete(`${url}/${id}`);
      return id; // Return the deleted id
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk action creator for updateById
export const updateById = createAsyncThunk(
  'common/updateById',
  async (payload, thunkAPI) => {
    const { url, id, data } = payload;
    try {
      const response = await api.put(`${url}/${id}`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// Async thunk action creator for create
export const create = createAsyncThunk(
  'common/create',
  async (payload, thunkAPI) => {
    const { url, data } = payload;
    try {
      const response = await api.post(url, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// // Common slice reducer
// const commonSlice = createSlice({
//   name: 'common',
//   initialState: {
//     data: null,
//     status: 'idle',
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(getData.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(getData.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//         state.error = null;
//       })
//       .addCase(getData.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       .addCase(getById.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(getById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//         state.error = null;
//       })
//       .addCase(getById.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       .addCase(deleteById.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(deleteById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Remove the deleted item from the data array
//         state.data = state.data.filter((item) => item.id !== action.payload);
//         state.error = null;
//       })
//       .addCase(deleteById.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       .addCase(updateById.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(updateById.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Replace the updated item in the data array
//         state.data = state.data.map((item) =>
//           item.id === action.payload.id ? action.payload : item
//         );
//         state.error = null;
//       })
//       .addCase(updateById.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       })
//       .addCase(create.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(create.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         // Add the new item to the data array
//         state.data = [...state.data, action.payload];
//         state.error = null;
//       })
//       .addCase(create.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
// });

// export default commonSlice.reducer;
