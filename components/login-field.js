/**
 * @file login-field.js
 */
// Import dependencies
import { useState } from 'react'
import Cookies from 'universal-cookie'
import consts from '../utils/consts'

const LoginField = ({ redirectPath }) => {
  const [password, setPassword] = useState("")

  return (
    <div className="w-1/2 max-w-sm mx-auto border-4 border-gray m-auto align-middle mt-8 py-8 px-10">
      <form>
        <label className="block">
          <h2 className="font-rylan text-text-color text-h2 leading-tight mb-8">This content is for email subscribers only!</h2>
          <p className="font-barlow text-text-color text-paragraph leading-snug mb-8">Please enter the password you received in your subscriber email.</p>
          <input
            type="text"
            className=" w-full font-barlow form-input mt-1 block border-gray-400 border-solid border-2 mb-4 py-4 px-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <button
          type="submit"
          className=" w-full mt-3 outline-none text-center font-barlow uppercase py-3 px-3 cursor-pointer transition duration-200 bg-purple text-white"
          onClick={(e) => {
            e.preventDefault()
            const cookies = new Cookies()
            cookies.set(consts.SiteReadCookie, password, {
              path: "/",
            })
            window.location.href = redirectPath ?? "/"
          }}
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginField