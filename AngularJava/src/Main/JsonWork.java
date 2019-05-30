package Main;

import com.fasterxml.jackson.core.*;

import java.io.File;
import java.util.ArrayList;

import com.fasterxml.jackson.annotation.*;
import com.fasterxml.jackson.databind.*;

public class JsonWork {

	public static void main(String[] args) {
	
	ArrayList<String> listaDeEstados = new ArrayList<String>();
	listaDeEstados.add("Ceará");
	listaDeEstados.add("Amazonas");
	
	Country newCountry = new Country("Brazil",2000, listaDeEstados);
	
	newCountry.states = listaDeEstados;
	ObjectMapper mapper = new ObjectMapper();
	
	try {
		mapper.writeValue(new File("C:\\Users\\estagio2\\Desktop\\Arquivos\\AngularStudies\\Atividades\\src\\assets\\country.json"), newCountry);
		System.out.println("Objeto criado com sucesso");
	} catch (Exception e) {
		e.printStackTrace();
	}
	
	}

}

