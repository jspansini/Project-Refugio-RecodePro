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

import br.com.Squad21.entities.User;
import br.com.Squad21.servicies.UserService;

@RestController
@RequestMapping("/usuarios")
@CrossOrigin(origins = "https://refugio.netlify.app/")
public class UserResource {
	
	@Autowired
	private UserService service;

	@GetMapping
	public List<User> findAll() {
		return service.findAll();

	}

	@GetMapping(value = "/{id}")
	public User findById(@PathVariable Integer id) {
		return service.findById(id);
	}

	@PostMapping(value = "/")
	public ResponseEntity<User> save(@RequestBody User user) {
		service.save(user);
		return ResponseEntity.ok().body(user);
	}

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<User> delete(@PathVariable Integer id) {
		User user = service.findById(id);
		service.delete(id);
		return ResponseEntity.ok().body(user);
	}

	@PutMapping(value = "/update")
	public ResponseEntity<User> update(@RequestBody User user) {
		user = service.update(user);
		return ResponseEntity.ok().body(user);
	}

	
}
