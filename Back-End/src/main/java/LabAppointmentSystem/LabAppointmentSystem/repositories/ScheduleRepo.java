package LabAppointmentSystem.LabAppointmentSystem.repositories;

import LabAppointmentSystem.LabAppointmentSystem.entity.Schedule;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ScheduleRepo  extends JpaRepository<Schedule,Integer> {
    Optional<Schedule> findByName(String name);
    Optional<Schedule> findBycategory(String category);
}
