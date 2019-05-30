package Main;

import java.util.ArrayList;

public class Country {
	public String name;
	public Integer population;
	public ArrayList<String> states;


	public Country (String name, int population, ArrayList<String> states) {
		this.name = name;
		this.population = population;
		this.states = states;
	}

}
