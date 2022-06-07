import axios from "axios";

import { BASE_URL, fetchUsers, login } from "../utils";

jest.mock("axios");

describe("fetchSubjects", () => {
  describe("when API call is successful", () => {
    it("should return subject list", async () => {
      // given
      const subjects = {
        subjects: [
          {
            ele: {
              _id: "629f54c07c26479a3b3bb559",
              title: "mouheb",
              description: "ss",
              options: ["true", "false"],
              date: "2022-06-07T13:38:08.867Z",
              __v: 0,
            },
            votes: [
              {
                _id: "629f5fa4e81f95e0058c5224",
                user: "629f548c7c26479a3b3bb556",
                subject: "629f54c07c26479a3b3bb559",
                choice: "true",
                date: "2022-06-07T14:24:36.633Z",
                __v: 0,
              },
            ],
          },
          {
            ele: {
              _id: "629f54e47c26479a3b3bb55c",
              title: "mouheb2",
              description: "sssss",
              options: ["true", "false"],
              date: "2022-06-07T13:38:44.628Z",
              __v: 0,
            },
            votes: [],
          },
          {
            ele: {
              _id: "629f54f87c26479a3b3bb55f",
              title: "mouheb3",
              description: "sssss",
              options: ["true", "false"],
              date: "2022-06-07T13:39:04.979Z",
              __v: 0,
            },
            votes: [],
          },
        ],
      };

      axios.get.mockResolvedValueOnce(subjects);

      // when
      const result = await fetchUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}subjects/Subjects`);
      expect(result).toEqual(subjects);
    });
  });

  describe("when we call login", () => {
    it("should return  user", async () => {
      // given
      const user = {
        user: {
          _id: "629f548c7c26479a3b3bb556",
          name: "123456",
          email: "mouheb",
          password: "ss",
          date: "2022-06-07T13:37:16.121Z",
          __v: 0,
        },
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjlmNTQ4YzdjMjY0NzlhM2IzYmI1NTYiLCJuYW1lIjoiMTIzNDU2IiwiZW1haWwiOiJtb3VoZWIiLCJwYXNzd29yZCI6InNzIiwiZGF0ZSI6IjIwMjItMDYtMDdUMTM6Mzc6MTYuMTIxWiIsIl9fdiI6MCwiaWF0IjoxNjU0NjE4MTUwfQ.NAXlNRifHcJED-PtGbeENnLsPowEwF2lVwz1fzxWKkQ",
      };

      axios.post.mockResolvedValueOnce(user);

      // when
      const result = await login();

      // then
      expect(axios.post).toHaveBeenCalledWith(`${BASE_URL}user/login`, {
        email: "mouheb",
        password: "ss",
      });
      expect(result).toEqual(user);
    });
  });
});
