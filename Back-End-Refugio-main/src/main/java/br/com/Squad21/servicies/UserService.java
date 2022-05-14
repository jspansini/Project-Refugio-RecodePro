package br.com.Squad21.servicies;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.Squad21.entities.User;
import br.com.Squad21.repositories.UserRepository;

@Service
public class UserService {
	
	@Autowired
	private  UserRepository repository;

	@Transactional(readOnly = true)
	public List<User> findAll() {
		List<User> resultado = repository.findAll();
		return resultado;
	}

	@Transactional(readOnly = true)
	public User findById(Integer id) {
		Optional<User> user = repository.findById(id);
		return user.get();
	}

	@Transactional(readOnly = false)
	public void save(User user) {
		repository.save(user);
	}

	public void delete(Integer id) {
		Optional<User> user = repository.findById(id);
		if (user.isPresent()) {
			repository.delete(user.get());
		} else {
			System.out.println("Não existe");
		}
	}

	public User update(User user) {
		return repository.save(user);
	}
	
}
