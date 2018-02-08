/*global expect*/
import UpdateChar from "../../actions/action_updateChar";
import { UPDATE_CHAR } from "../../actions/actionTypes";
import newCharacter from "../../mockObjects/newCharacter";

const action1 = UpdateChar({ STR: 1 });
const action2 = UpdateChar({ PER: 5 });
const action3 = UpdateChar({ CLASS: "barbarian" });
const action4 = UpdateChar({ isNew: false });
describe("function set for changes made from create character screen", () => {
  it("passes the updateCharacter action type correctly", () => {
    expect(action1.type).toBe(UPDATE_CHAR);
  });
  it("passes the stat to the reducers as a payload object -case 1", () => {
    expect(action1.payload).toEqual({ STR: 1 });
  });

  it("passes the stat to the reducers as a payload object -case 2", () => {
    expect(action2.payload).toEqual({ PER: 5 });
  });
  it("passes class changes to the reducers", () => {
    expect(action3.payload).toEqual({ CLASS: "barbarian" });
  });
  it("passes {isNew:false} to the reducers", () => {
    expect(action4.payload).toEqual({ isNew: false });
  });
});
