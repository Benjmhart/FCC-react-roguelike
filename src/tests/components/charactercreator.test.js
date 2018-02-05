/*global expect jest*/

import React from "react";
import { shallow } from "enzyme";
import newCharacter from "../../mockObjects/newCharacter";
import oldCharacter from "../../mockObjects/oldCharacter";
import { CharacterCreator } from "../../components/CharacterCreator";
import classText from "../../assets/classText";

jest.mock("../../index.js", () => "root");
const updateCharacter = jest.fn();
//GENERAL
describe("Character Creator", () => {
  it("renders without crashing", () => {
    shallow(
      <CharacterCreator
        character={newCharacter}
        updateCharacter={updateCharacter}
      />
    );
  });
  it("receives the character-creator class", () => {
    const tree = shallow(
      <CharacterCreator
        character={newCharacter}
        updateCharacter={updateCharacter}
      />
    );
    expect(tree.is(".character-creator")).toBe(true);
  });

  //STRENGTH
  describe("form renderering & functions - strength attribute", () => {
    const modCharacter = { ...newCharacter };
    modCharacter.STR = 1;
    modCharacter.AVL = 29;
    const tree = shallow(
      <CharacterCreator
        character={modCharacter}
        updateCharacter={updateCharacter}
      />
    );
    it("has a p tag to show the strength stat", () => {
      expect(tree.find("p.str").length).toBe(1);
    });
    it("the p tag actually shows strength attribute level", () => {
      expect(tree.find("p.str").text()).toBe("Strength: 1");
    });
    it("has a button to increase strength ", () => {
      expect(tree.find(".statbtn.str.increase").length).toBe(1);
    });
    it("the increase strength button has + as text ", () => {
      expect(tree.find(".statbtn.str.increase").text()).toEqual("+");
    });
    it("the +strength button actually calls the updateCharacter  with correct arguements when clicked", () => {
      tree.find(".statbtn.str.increase").simulate("click");
      expect(updateCharacter).toBeCalledWith({ STR: 2 });
      updateCharacter.mockClear();
    });
    it("has a button to decrease strength", () => {
      expect(tree.find(".statbtn.str.decrease").length).toBe(1);
    });
    it("the decrease strength button has - as text", () => {
      expect(tree.find(".statbtn.str.decrease").text()).toEqual("-");
    });
    it("the decrease button calls updateCharacter with correct arguments when clicked", () => {
      tree.find(".statbtn.str.decrease").simulate("click");
      expect(updateCharacter).toBeCalledWith({ STR: 0 });
      updateCharacter.mockClear();
    });
  });
});

describe("disable rules for STR buttons - POSITIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.AGI = 30;
  modCharacter.AVL = 0;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button becomes disabled if AVL=0", () => {
    expect(tree.find(".statbtn.str.increase").prop("disabled")).toBe(true);
  });
  it("the decrease button becomes disabled if STR=0", () => {
    expect(tree.find(".statbtn.str.decrease").prop("disabled")).toBe(true);
  });
});

describe("disable rules for STR buttons - NEGATIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.STR = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button is not disabled if AVL > 0", () => {
    expect(tree.find(".statbtn.str.increase").prop("disabled")).toBe(false);
  });
  it("the decrease button is not disabled if STR > 0", () => {
    expect(tree.find(".statbtn.str.decrease").prop("disabled")).toBe(false);
  });
});

//AGILITY
describe("form renderering & functions - agility attribute", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.AGI = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("has a p tag to show the AGI stat", () => {
    expect(tree.find("p.agi").length).toBe(1);
  });
  it("the p tag actually shows agility attribute level", () => {
    expect(tree.find("p.agi").text()).toBe("Agility: 1");
  });
  it("has a button to increase agility ", () => {
    expect(tree.find(".statbtn.agi.increase").length).toBe(1);
  });
  it("the increase agility button has + as text ", () => {
    expect(tree.find(".statbtn.agi.increase").text()).toEqual("+");
  });
  it("the +agility button actually calls the updateCharacter  with correct arguements when clicked", () => {
    tree.find(".statbtn.agi.increase").simulate("click");
    expect(updateCharacter).toBeCalledWith({ AGI: 2 });
    updateCharacter.mockClear();
  });
  it("has a button to decrease agility", () => {
    expect(tree.find(".statbtn.agi.decrease").length).toBe(1);
  });
  it("the decrease agility button has - as text", () => {
    expect(tree.find(".statbtn.agi.decrease").text()).toEqual("-");
  });
  it("the decrease button calls updateCharacter with correct arguments when clicked", () => {
    tree.find(".statbtn.agi.decrease").simulate("click");
    expect(updateCharacter).toBeCalledWith({ AGI: 0 });
    updateCharacter.mockClear();
  });
});

describe("disable rules for AGI buttons - POSITIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.STR = 30;
  modCharacter.AVL = 0;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button becomes disabled if AVL=0", () => {
    expect(tree.find(".statbtn.agi.increase").prop("disabled")).toBe(true);
  });
  it("the decrease button becomes disabled if AGI=0", () => {
    expect(tree.find(".statbtn.agi.decrease").prop("disabled")).toBe(true);
  });
});

describe("disable rules for AGI buttons - NEGATIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.AGI = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button is not disabled if AVL > 0", () => {
    expect(tree.find(".statbtn.agi.increase").prop("disabled")).toBe(false);
  });
  it("the decrease button is not disabled if AGI > 0", () => {
    expect(tree.find(".statbtn.agi.decrease").prop("disabled")).toBe(false);
  });
});
// WISDOM
describe("form renderering & functions - wisdom attribute", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.WIS = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("has a p tag to show the wis stat", () => {
    expect(tree.find("p.wis").length).toBe(1);
  });
  it("the p tag actually shows Wisdom attribute level", () => {
    expect(tree.find("p.wis").text()).toBe("Wisdom: 1");
  });
  it("has a button to increase Wisdom ", () => {
    expect(tree.find(".statbtn.wis.increase").length).toBe(1);
  });
  it("the increase Wisdom button has + as text ", () => {
    expect(tree.find(".statbtn.wis.increase").text()).toEqual("+");
  });
  it("the +Wisdom button actually calls the updateCharacter  with correct arguements when clicked", () => {
    tree.find(".statbtn.wis.increase").simulate("click");
    expect(updateCharacter).toBeCalledWith({ WIS: 2 });
    updateCharacter.mockClear();
  });
  it("has a button to decrease Wisdom", () => {
    expect(tree.find(".statbtn.wis.decrease").length).toBe(1);
  });
  it("the decrease Wisdom button has - as text", () => {
    expect(tree.find(".statbtn.wis.decrease").text()).toEqual("-");
  });
  it("the decrease button calls updateCharacter with correct arguments when clicked", () => {
    tree.find(".statbtn.wis.decrease").simulate("click");
    expect(updateCharacter).toBeCalledWith({ WIS: 0 });
    updateCharacter.mockClear();
  });
});

describe("disable rules for WIS buttons - POSITIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.STR = 30;
  modCharacter.AVL = 0;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button becomes disabled if AVL=0", () => {
    expect(tree.find(".statbtn.wis.increase").prop("disabled")).toBe(true);
  });
  it("the decrease button becomes disabled if WIS=0", () => {
    expect(tree.find(".statbtn.wis.decrease").prop("disabled")).toBe(true);
  });
});

describe("disable rules for WIS buttons - NEGATIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.WIS = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button is not disabled if AVL > 0", () => {
    expect(tree.find(".statbtn.wis.increase").prop("disabled")).toBe(false);
  });
  it("the decrease button is not disabled if WIS > 0", () => {
    expect(tree.find(".statbtn.wis.decrease").prop("disabled")).toBe(false);
  });
});
//PERCEPTION
describe("form renderering & functions - perception attribute", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.PER = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("has a p tag to show the per stat", () => {
    expect(tree.find("p.per").length).toBe(1);
  });
  it("the p tag actually shows PER attribute level", () => {
    expect(tree.find("p.per").text()).toBe("Perception: 1");
  });
  it("has a button to increase Perception ", () => {
    expect(tree.find(".statbtn.per.increase").length).toBe(1);
  });
  it("the increase Perception button has + as text ", () => {
    expect(tree.find(".statbtn.per.increase").text()).toEqual("+");
  });
  it("the +Perception button actually calls the updateCharacter  with correct arguements when clicked", () => {
    tree.find(".statbtn.per.increase").simulate("click");
    expect(updateCharacter).toBeCalledWith({ PER: 2 });
    updateCharacter.mockClear();
  });
  it("has a button to decrease Perception", () => {
    expect(tree.find(".statbtn.per.decrease").length).toBe(1);
  });
  it("the decrease Perception button has - as text", () => {
    expect(tree.find(".statbtn.per.decrease").text()).toEqual("-");
  });
  it("the decrease button calls updateCharacter with correct arguments when clicked", () => {
    tree.find(".statbtn.per.decrease").simulate("click");
    expect(updateCharacter).toBeCalledWith({ PER: 0 });
    updateCharacter.mockClear();
  });
});

describe("disable rules for PER buttons - POSITIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.STR = 30;
  modCharacter.AVL = 0;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button becomes disabled if AVL=0", () => {
    expect(tree.find(".statbtn.per.increase").prop("disabled")).toBe(true);
  });
  it("the decrease button becomes disabled if PER=0", () => {
    expect(tree.find(".statbtn.per.decrease").prop("disabled")).toBe(true);
  });
});

describe("disable rules for PER buttons - NEGATIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.PER = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button is not disabled if AVL > 0", () => {
    expect(tree.find(".statbtn.per.increase").prop("disabled")).toBe(false);
  });
  it("the decrease button is not disabled if PER > 0", () => {
    expect(tree.find(".statbtn.per.decrease").prop("disabled")).toBe(false);
  });
});
// CHARISMA
describe("form renderering & functions - Charisma attribute", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.CHA = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("has a p tag to show the cha stat", () => {
    expect(tree.find("p.cha").length).toBe(1);
  });
  it("the p tag actually shows cha attribute level", () => {
    expect(tree.find("p.cha").text()).toBe("Charisma: 1");
  });
  it("has a button to increase Charisma ", () => {
    expect(tree.find(".statbtn.cha.increase").length).toBe(1);
  });
  it("the increase Charisma button has + as text ", () => {
    expect(tree.find(".statbtn.cha.increase").text()).toEqual("+");
  });
  it("the +Charisma button actually calls the updateCharacter  with correct arguements when clicked", () => {
    tree.find(".statbtn.cha.increase").simulate("click");
    expect(updateCharacter).toBeCalledWith({ CHA: 2 });
    updateCharacter.mockClear();
  });
  it("has a button to decrease Charisma", () => {
    expect(tree.find(".statbtn.cha.decrease").length).toBe(1);
  });
  it("the decrease Charisma button has - as text", () => {
    expect(tree.find(".statbtn.cha.decrease").text()).toEqual("-");
  });
  it("the decrease button calls updateCharacter with correct arguments when clicked", () => {
    tree.find(".statbtn.cha.decrease").simulate("click");
    expect(updateCharacter).toBeCalledWith({ CHA: 0 });
    updateCharacter.mockClear();
  });
});

describe("disable rules for cha buttons - POSITIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.STR = 30;
  modCharacter.AVL = 0;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button becomes disabled if AVL=0", () => {
    expect(tree.find(".statbtn.cha.increase").prop("disabled")).toBe(true);
  });
  it("the decrease button becomes disabled if CHA=0", () => {
    expect(tree.find(".statbtn.cha.decrease").prop("disabled")).toBe(true);
  });
});

describe("disable rules for CHA buttons - NEGATIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.CHA = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button is not disabled if AVL > 0", () => {
    expect(tree.find(".statbtn.cha.increase").prop("disabled")).toBe(false);
  });
  it("the decrease button is not disabled if CHA > 0", () => {
    expect(tree.find(".statbtn.cha.decrease").prop("disabled")).toBe(false);
  });
});
//Luck
describe("form renderering & functions - Luck attribute", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.LUK = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("has a p tag to show the luk stat", () => {
    expect(tree.find("p.luk").length).toBe(1);
  });
  it("the p tag actually shows luk attribute level", () => {
    expect(tree.find("p.luk").text()).toBe("Luck: 1");
  });
  it("has a button to increase Luck ", () => {
    expect(tree.find(".statbtn.luk.increase").length).toBe(1);
  });
  it("the increase Luck button has + as text ", () => {
    expect(tree.find(".statbtn.luk.increase").text()).toEqual("+");
  });
  it("the +Luck button actually calls the updateCharacter  with correct arguements when clicked", () => {
    tree.find(".statbtn.luk.increase").simulate("click");
    expect(updateCharacter).toBeCalledWith({ LUK: 2 });
    updateCharacter.mockClear();
  });
  it("has a button to decrease Luck", () => {
    expect(tree.find(".statbtn.luk.decrease").length).toBe(1);
  });
  it("the decrease Charisma button has - as text", () => {
    expect(tree.find(".statbtn.luk.decrease").text()).toEqual("-");
  });
  it("the decrease button calls updateCharacter with correct arguments when clicked", () => {
    tree.find(".statbtn.luk.decrease").simulate("click");
    expect(updateCharacter).toBeCalledWith({ LUK: 0 });
    updateCharacter.mockClear();
  });
});

describe("disable rules for luk buttons - POSITIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.STR = 30;
  modCharacter.AVL = 0;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button becomes disabled if AVL=0", () => {
    expect(tree.find(".statbtn.luk.increase").prop("disabled")).toBe(true);
  });
  it("the decrease button becomes disabled if Luk=0", () => {
    expect(tree.find(".statbtn.luk.decrease").prop("disabled")).toBe(true);
  });
});

describe("disable rules for LUK buttons - NEGATIVE TESTS", () => {
  const modCharacter = { ...newCharacter };
  modCharacter.LUK = 1;
  modCharacter.AVL = 29;
  const tree = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("the increase button is not disabled if AVL > 0", () => {
    expect(tree.find(".statbtn.luk.increase").prop("disabled")).toBe(false);
  });
  it("the decrease button is not disabled if LUK > 0", () => {
    expect(tree.find(".statbtn.luk.decrease").prop("disabled")).toBe(false);
  });
});

describe("behaviour for the class selector dropdown", () =>{
  const tree = shallow(
    <CharacterCreator
      character={newCharacter}
      updateCharacter={updateCharacter}
    />
  );
  it("is a selector with correct className",() => {
    expect(tree.find('select.class-selector').length).toBe(1);
  });
  it("has an option for Archaeologist", () => {
    expect(tree.find('select.class-selector').find('option.archaeologist').prop("value")).toBe("archaeologist")
  })
  it("has an archaeologist option that says 'Archaeologist",()=> {
    expect(tree.find('select.class-selector').find('option.archaeologist').text()).toBe("Archaeologist")
  })
  it("has an option for Barbarian", () => {
    expect(tree.find('select.class-selector').find('option.barbarian').prop("value")).toBe("barbarian")
  })
  it("has an Barbarian option that says 'Barbarian",()=> {
    expect(tree.find('select.class-selector').find('option.barbarian').text()).toBe("Barbarian")
  })
  it("has an option for Knight", () => {
    expect(tree.find('select.class-selector').find('option.knight').prop("value")).toBe("knight")
  })
  it("has an Knight option that says 'Knight",()=> {
    expect(tree.find('select.class-selector').find('option.knight').text()).toBe("Knight")
  })
  it("has an option for Tourist", () => {
    expect(tree.find('select.class-selector').find('option.tourist').prop("value")).toBe("tourist")
  })
  it("has an Tourist option that says 'Tourist",()=> {
    expect(tree.find('select.class-selector').find('option.tourist').text()).toBe("Tourist")
  })
  it("has an option for God", () => {
    expect(tree.find('select.class-selector').find('option.god').prop("value")).toBe("god")
  })
  it("has an God option that says 'God",()=> {
    expect(tree.find('select.class-selector').find('option.god').text()).toBe("God")
  })
  it("calls the updatecharacter function with correct arguments when changed", () =>{
    const event = {target:{value:"barbarian"}};
    tree.find('select.class-selector').simulate('change', event);
    expect(updateCharacter).toBeCalledWith({ CLASS: "barbarian" });
  })
  it("has value equal to the class of the character", () => {
    expect(tree.find('select.class-selector').prop('value')).toBe(newCharacter.CLASS);
  })
})
describe("behaviour for the finish button", () => {
    const tree = shallow(
    <CharacterCreator
      character={newCharacter}
      updateCharacter={updateCharacter}
    />)
  it("exists with correct classes", () => {
    expect(tree.find('button.finish').length).toBe(1)
  })
  it("contains the text: FINISH", () => {
    expect(tree.find('button.finish').text()).toBe("FINISH");
  })
  it("is disabled if avl!=0", () => {
    const modCharacter = {...newCharacter}  
    modCharacter.CLASS="archaeologist";
    const tree2 = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />)
    expect(tree2.find('button.finish').prop('disabled')).toBe(true);
  })
  it("is not disabled if avl=0", () => {
    const modCharacter = {...newCharacter}  
    modCharacter.STR=30;
    modCharacter.AVL=0;
    modCharacter.CLASS = "archaeologist"
    const tree2 = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />)
    expect(tree2.find('button.finish').prop('disabled')).toBe(false);
  });
  it("is disabled if a class is not selected", ()=>{
    const modCharacter = {...newCharacter} 
    modCharacter.STR=30;
    modCharacter.AVL=0;
    const tree2 = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />)
    expect(tree2.find('button.finish').prop('disabled')).toBe(true);
  })
  it("is not disabled if a class is selected and avl= 0", () => {
    const modCharacter = {...newCharacter} 
    modCharacter.STR=30;
    modCharacter.AVL=0;
    modCharacter.CLASS="archaeologist"
    const tree2 = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />)
    expect(tree2.find('button.finish').prop('disabled')).toBe(false);
  })
  it("calls updatecharacter with isNew=false when clicked, if not disabled", () => {
    const modCharacter = {...newCharacter} 
    modCharacter.STR=30;
    modCharacter.AVL=0;
    modCharacter.CLASS="archaeologist"
    const tree2 = shallow(
    <CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />)
    tree2.find('button.finish').simulate('click');
    expect(updateCharacter).toBeCalledWith({ isNew:false });
  })
})

describe("class description area text", () =>{
  const modCharacter = {...oldCharacter}
  modCharacter.isNew = true;
  const tree2 = shallow(<CharacterCreator
      character={modCharacter}
      updateCharacter={updateCharacter}
    />)
  it("has a div tag with a class-desc class, if a class is chosen", ()=> {
    expect(tree2.find('div.class-desc').length).toBe(1);
  })
  it("contains an h2 matching the name of the class", ()=> {
    expect(tree2.find('h2.class-header').text()).toEqual(modCharacter.CLASS);
  });
  it("contains text matching the outputs of the correct classText", ()=> {
    console.log(modCharacter);
    console.log(tree2.find('.class-text').debug())
    expect(tree2.find('p.class-text').text()).toEqual(classText.archaeologist);
  });
  it("contains an area for equipment loadout if a class is chosen", () => {
    expect(tree2.find('div.equipment').length).toBe(1);
  })
  it("contains an h2 for equipment", ()=> {
    expect(tree2.find('h2.equipment-header').text()).toBe("Equipment Loadout");
  })
  it("contains a p tag with armor", ()=>{
    expect(tree2.find('p.equipment-armor').text()).toEqual(`Armor: ${modCharacter.armor.name}`)
  })
  
  it("contains a p tag with weapon", ()=>{
    expect(tree2.find('p.equipment-weapon').text()).toEqual(`Weapon: ${modCharacter.weapon.name}`)
  })
  it("contains a p tag with shoes", ()=>{
    expect(tree2.find('p.equipment-shoes').text()).toEqual(`Shoes: ${modCharacter.shoes.name}`)
  })
  
  it("contains a p tag with head", ()=>{
    expect(tree2.find('p.equipment-helmet').text()).toEqual(`Head: ${modCharacter.helmet.name}`)
  })
  
  it("contains a p tag with ring", ()=>{
    expect(tree2.find('p.equipment-ring').text()).toEqual(`Ring: ${modCharacter.ring.name}`)
  })
  
})
/*

		// expect(tree.find('button.finish').length).toBe(1);
	it(
		"displays CharacterStats List items with forms connected to stats on the state.character.stats object "
	);
	it("allows the user to choose a class that changes equipment rollouts");
	it("does not allow the user to use fewer stat points than availlable");
	it("does not allow the user to use more than available stats");
	it(
		"calls a start game action when the user completes their character properly"
	);
*/
