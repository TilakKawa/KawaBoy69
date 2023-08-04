/* Citation and Sources...
 * Final Project Milestone 5
 * Module: Motorcycle
 * Filename: Motorcycle.h
 * Version 1.0
 * Author	 Tilak Kawa 
 * Revision History
 * -----------------------------------------------------------
 *  Date        Reason
 *  2022/11/23  Preliminary release
 *  2022/11/23  Debugged DMA
 *  -----------------------------------------------------------
 *  I have done all the coding by myself and only copied the code 
 *  that my professor provided to complete my project milestones.
 *  -----------------------------------------------------------
 *  */


#ifndef SDDS_MOTORCYCLE_H__
#define SDDS_MOTORCYCLE_H__

#include "Vehicle.h"
#include <iostream>

using namespace std;
namespace sdds {
	class Motorcycle : public Vehicle {
	public:
		bool hasSideCar = false;
		bool isEmpty = false;
	public:
		Motorcycle();
		Motorcycle(const char* licPlate, const char* makeModel);

		~Motorcycle();
		Motorcycle(const Motorcycle& motorcycle);
		Motorcycle& operator=(const Motorcycle& motorcycle);

		std::ostream& writeType(std::ostream&) const override;
		std::istream& read(std::istream&) override;
		std::ostream& write(std::ostream&) const override;

		void setEmpty();
	};
}
#endif