/*
  # Usage

  Export your reducers from this file in the format:
  ```
  {[key: string]: Reducer}
  ```

  Example:
  ```
  import app from './reducers/AppReducer'
  import { validation, submission } from './reducers/FormReducer'

  export {
    app,
    validation,
    submission
  }
  ```
*/
import app from './reducers/AppReducer'

export {
  app
}
