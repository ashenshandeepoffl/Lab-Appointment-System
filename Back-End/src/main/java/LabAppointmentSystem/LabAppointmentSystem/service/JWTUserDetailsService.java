package LabAppointmentSystem.LabAppointmentSystem.service;

import LabAppointmentSystem.LabAppointmentSystem.DAO.UsersDAO;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class JWTUserDetailsService implements UserDetailsService {
    private UsersDAO usersDAO;

    public JWTUserDetailsService(UsersDAO adminsDAO) {
        this.usersDAO= adminsDAO;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return usersDAO.getAllUsersByEmail(username).get(0);
    }
}
