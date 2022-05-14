package br.com.Squad21.resources;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.Squad21.entities.CriarDadiva;
import br.com.Squad21.servicies.CriarDadivaService;

@RestController
@RequestMapping("/criardadivas")
@CrossOrigin(origins = "https://refugio.netlify.app/")
public class CriarDadivaResource {

	
	@Autowired
	private CriarDadivaService service;

	@GetMapping
	public List<CriarDadiva> findAll() {
		return service.findAll();

	}

	@GetMapping(value = "/{id}")
	public CriarDadiva findById(@PathVariable Long id) {
		return service.findById(id);
	}

	@PostMapping(value = "/")
	public ResponseEntity<CriarDadiva> save(@RequestBody CriarDadiva criarDadiva) {
		service.save(criarDadiva);
		return ResponseEntity.ok().body(criarDadiva);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<CriarDadiva> delete(@PathVariable Long id) {
		CriarDadiva criarDadiva = service.findById(id);
		service.delete(id);
		return ResponseEntity.ok().body(criarDadiva);
	}

	@PutMapping(value = "/update")
	public ResponseEntity<CriarDadiva> update(@RequestBody CriarDadiva criarDadiva) {
		criarDadiva = service.update(criarDadiva);
		return ResponseEntity.ok().body(criarDadiva);
	}

}
	
	
		

