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

import br.com.Squad21.entities.EscolherDadiva;
import br.com.Squad21.servicies.EscolherDadivaService;




@RestController
@RequestMapping("/escolherdadivas")
@CrossOrigin(origins = "https://refugio.netlify.app/")
public class EscolherDadivaResource {


		
		@Autowired
		private EscolherDadivaService service;

		@GetMapping
		public List<EscolherDadiva> findAll() {
			return service.findAll();

		}

		@GetMapping(value = "/{id}")
		public EscolherDadiva findById(@PathVariable Long id) {
			return service.findById(id);
		}

		@PostMapping(value = "/")
		public ResponseEntity<EscolherDadiva> save(@RequestBody EscolherDadiva escolherDadiva) {
			service.save(escolherDadiva);
			return ResponseEntity.ok().body(escolherDadiva);
		}

		@DeleteMapping(value = "/{id}")
		public ResponseEntity<EscolherDadiva> delete(@PathVariable Long id) {
			EscolherDadiva escolherDadiva = service.findById(id);
			service.delete(id);
			return ResponseEntity.ok().body(escolherDadiva);
		}

		@PutMapping(value = "/update")
		public ResponseEntity<EscolherDadiva> update(@RequestBody EscolherDadiva escolherDadiva) {
			escolherDadiva = service.update(escolherDadiva);
			return ResponseEntity.ok().body(escolherDadiva);
		}

	}

		
