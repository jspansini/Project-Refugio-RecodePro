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

import br.com.Squad21.entities.SolicitarDadiva;
import br.com.Squad21.servicies.SolicitarDadivaService;

@RestController
@RequestMapping("/solicitardadivas")
@CrossOrigin(origins = "https://refugio.netlify.app/")
public class SolicitarDadivaResource {

	
	
	@Autowired
	private SolicitarDadivaService service;

	@GetMapping
	public List<SolicitarDadiva> findAll() {
		return service.findAll();

	}

	@GetMapping(value = "/{id}")
	public SolicitarDadiva findById(@PathVariable Long id) {
		return service.findById(id);
	}

	@PostMapping(value = "/")
	public ResponseEntity<SolicitarDadiva> save(@RequestBody SolicitarDadiva solicitarDadiva) {
		service.save(solicitarDadiva);
		return ResponseEntity.ok().body(solicitarDadiva);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<SolicitarDadiva> delete(@PathVariable Long id) {
		SolicitarDadiva solicitarDadiva = service.findById(id);
		service.delete(id);
		return ResponseEntity.ok().body(solicitarDadiva);
	}

	@PutMapping(value = "/update")
	public ResponseEntity<SolicitarDadiva> update(@RequestBody SolicitarDadiva solicitarDadiva) {
		solicitarDadiva = service.update(solicitarDadiva);
		return ResponseEntity.ok().body(solicitarDadiva);
	}

}
	
	
	
	


	

