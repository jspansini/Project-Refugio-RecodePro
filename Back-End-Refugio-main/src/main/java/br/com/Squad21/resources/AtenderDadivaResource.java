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

import br.com.Squad21.entities.AtenderDadiva;
import br.com.Squad21.servicies.AtenderDadivaService;



@RestController
@RequestMapping("/atenderdadivas")
@CrossOrigin(origins = "https://refugio.netlify.app/")
public class AtenderDadivaResource {
	
	@Autowired
	private AtenderDadivaService service;

	@GetMapping
	public List<AtenderDadiva> findAll() {
		return service.findAll();

	}

	@GetMapping(value = "/{id}")
	public AtenderDadiva findById(@PathVariable Long id) {
		return service.findById(id);
	}

	@PostMapping(value = "/")
	public ResponseEntity<AtenderDadiva> save(@RequestBody AtenderDadiva atenderDadiva) {
		service.save(atenderDadiva);
		return ResponseEntity.ok().body(atenderDadiva);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<AtenderDadiva> delete(@PathVariable Long id) {
		AtenderDadiva atenderDadiva = service.findById(id);
		service.delete(id);
		return ResponseEntity.ok().body(atenderDadiva);
	}

	@PutMapping(value = "/update")
	public ResponseEntity<AtenderDadiva> update(@RequestBody AtenderDadiva atenderDadiva) {
		atenderDadiva = service.update(atenderDadiva);
		return ResponseEntity.ok().body(atenderDadiva);
	}

}
	
	
	
	


