package visitor_pattern;

public interface ComputerPart {
	void accept(ComputerPartVisitor computerPartVisitor);
}
