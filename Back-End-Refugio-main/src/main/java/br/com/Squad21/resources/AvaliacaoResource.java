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

import br.com.Squad21.entities.Avaliacao;
import br.com.Squad21.servicies.AvaliacaoService;



@RestController
@RequestMapping("/avaliacoes")
@CrossOrigin(origins = "https://refugio.netlify.app/")
public class AvaliacaoResource {
	
	@Autowired
	private AvaliacaoService service;

	@GetMapping
	public List<Avaliacao> findAll() {
		return service.findAll();

	}

	@GetMapping(value = "/{id}")
	public Avaliacao findById(@PathVariable Long id) {
		return service.findById(id);
	}

	@PostMapping(value = "/")
	public ResponseEntity<Avaliacao> save(@RequestBody Avaliacao avaliacao) {
		service.save(avaliacao);
		return ResponseEntity.ok().body(avaliacao);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<Avaliacao> delete(@PathVariable Long id) {
		Avaliacao avaliacao = service.findById(id);
		service.delete(id);
		return ResponseEntity.ok().body(avaliacao);
	}

	@PutMapping(value = "/update")
	public ResponseEntity<Avaliacao> update(@RequestBody Avaliacao avaliacao) {
		avaliacao = service.update(avaliacao);
		return ResponseEntity.ok().body(avaliacao);
	}

}
	
	
	
	





